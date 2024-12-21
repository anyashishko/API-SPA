import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUser, fetchUserAlbums } from '../services/api';
import '../styles/UserDetail.css';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await fetchUser(id);
        const albumsData = await fetchUserAlbums(id);
        setUser(userData);
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [id]);

  if (loading) return <div>Loading user...</div>;

  return (
    <div className="user-detail">
      <h1>{user.name}</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
      <p><strong>Company:</strong> {user.company.name}</p>

      <h2>Albums</h2>
      <div className="albums-list">
        {albums.map(album => (
          <Link key={album.id} to={`/albums/${album.id}`} className="album-item">
            {album.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserDetail;
