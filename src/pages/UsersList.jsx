import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../services/api';
import '../styles/UsersList.css';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div className="users-list">
      <h1>Users</h1>
      {users.map(user => (
        <Link key={user.id} to={`/users/${user.id}`} className="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  );
}

export default UsersList;
