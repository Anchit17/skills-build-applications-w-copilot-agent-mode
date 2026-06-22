import { useEffect, useState } from 'react';
import { fetchFromApi, getEndpointUrl } from '../utils/api';

interface LeaderboardEntry {
  _id: string;
  userId: string;
  userName: string;
  teamName: string;
  points: number;
  rank: number;
}

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const endpoint = getEndpointUrl('leaderboard');

  useEffect(() => {
    async function loadLeaderboard() {
      const data = await fetchFromApi<LeaderboardEntry>('leaderboard');
      setLeaderboard(data);
      setLoading(false);
    }
    loadLeaderboard();
  }, []);

  return (
    <div className="container mt-5">
      <h2>🏆 Leaderboard</h2>
      <p className="text-muted small">Endpoint: <code>{endpoint}</code></p>
      {loading ? (
        <p>Loading leaderboard...</p>
      ) : leaderboard.length === 0 ? (
        <p>No leaderboard entries found</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry) => (
              <tr key={entry._id} className={entry.rank === 1 ? 'table-warning' : ''}>
                <td>
                  <strong>#{entry.rank}</strong>
                </td>
                <td>{entry.userName}</td>
                <td>{entry.teamName}</td>
                <td>
                  <span className="badge bg-success">{entry.points}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
