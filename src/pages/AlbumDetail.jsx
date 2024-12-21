import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAlbum, fetchAlbumPhotos } from '../services/api';
import Loader from '../components/Loader';
import '../styles/AlbumDetail.css';

function AlbumDetail() {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAlbumData = async () => {
      try {
        const albumData = await fetchAlbum(albumId);
        const photosData = await fetchAlbumPhotos(albumId);
        setAlbum(albumData);
        setPhotos(photosData);
      } catch (error) {
        console.error("Error loading album data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAlbumData();
  }, [albumId]);

  if (loading) return <Loader />;

  return (
    <div className="album-detail">
      <h1>{album.title}</h1>
      <Link to={`/users/${album.userId}`} className="user-link">View User</Link>
      <h2>Photos</h2>
      <div className="photos-grid">
        {photos.map(photo => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

export default AlbumDetail;
