import { useEffect, useState } from 'react';
import { fetchFromApi } from '../utils/api';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  teamId?: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      const data = await fetchFromApi<User>('users');
      setUsers(data);
      setLoading(false);
    }
    loadUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Users</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Team ID</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className="badge bg-info">{user.role}</span>
                </td>
                <td>{user.teamId || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
