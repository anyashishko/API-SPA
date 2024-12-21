import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../services/api';
import '../styles/AlbumList.css';

function AlbumsList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums().then(setAlbums);
  }, []);

  return (
    <div className="albums-list">
      <h1>Albums</h1>
      {albums.map(album => (
        <Link key={album.id} to={`/albums/${album.id}`} className="album-item">
          {album.title}
        </Link>
      ))}
    </div>
  );
}

export default AlbumsList;
