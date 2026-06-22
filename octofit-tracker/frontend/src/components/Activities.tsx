import { useEffect, useState } from 'react';
import { fetchFromApi, getEndpointUrl } from '../utils/api';

interface Activity {
  _id: string;
  userId: string;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  distanceKm?: number;
  date: string;
}

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const endpoint = getEndpointUrl('activities');

  useEffect(() => {
    async function loadActivities() {
      const data = await fetchFromApi<Activity>('activities');
      setActivities(data);
      setLoading(false);
    }
    loadActivities();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Activities</h2>
      <p className="text-muted small">Endpoint: <code>{endpoint}</code></p>
      {loading ? (
        <p>Loading activities...</p>
      ) : activities.length === 0 ? (
        <p>No activities found</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Type</th>
              <th>Duration (min)</th>
              <th>Calories Burned</th>
              <th>Distance (km)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity._id}>
                <td>
                  <span className="badge bg-primary">{activity.type}</span>
                </td>
                <td>{activity.durationMinutes}</td>
                <td>{activity.caloriesBurned}</td>
                <td>{activity.distanceKm || 'N/A'}</td>
                <td>{new Date(activity.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
