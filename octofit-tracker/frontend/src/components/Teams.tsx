import { useEffect, useState } from 'react';
import { fetchFromApi } from '../utils/api';

interface Team {
  _id: string;
  name: string;
  description: string;
  captain: string;
  memberCount: number;
}

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTeams() {
      const data = await fetchFromApi<Team>('teams');
      setTeams(data);
      setLoading(false);
    }
    loadTeams();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Teams</h2>
      {loading ? (
        <p>Loading teams...</p>
      ) : teams.length === 0 ? (
        <p>No teams found</p>
      ) : (
        <div className="row">
          {teams.map((team) => (
            <div key={team._id} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{team.name}</h5>
                  <p className="card-text">{team.description}</p>
                  <p className="text-muted">
                    <strong>Captain:</strong> {team.captain}
                  </p>
                  <p className="text-muted">
                    <strong>Members:</strong> {team.memberCount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
