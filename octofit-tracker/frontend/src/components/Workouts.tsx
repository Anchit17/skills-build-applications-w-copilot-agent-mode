import { useEffect, useState } from 'react';
import { fetchFromApi } from '../utils/api';

interface Workout {
  _id: string;
  title: string;
  description: string;
  difficulty: string;
  durationMinutes: number;
  focusArea: string;
}

export default function Workouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWorkouts() {
      const data = await fetchFromApi<Workout>('workouts');
      setWorkouts(data);
      setLoading(false);
    }
    loadWorkouts();
  }, []);

  const difficultyBadgeClass = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-success';
      case 'intermediate':
        return 'bg-warning';
      case 'advanced':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className="container mt-5">
      <h2>💪 Workout Plans</h2>
      {loading ? (
        <p>Loading workouts...</p>
      ) : workouts.length === 0 ? (
        <p>No workouts found</p>
      ) : (
        <div className="row">
          {workouts.map((workout) => (
            <div key={workout._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{workout.title}</h5>
                  <p className="card-text">{workout.description}</p>
                  <p className="text-muted">
                    <strong>Duration:</strong> {workout.durationMinutes} min
                  </p>
                  <p className="text-muted">
                    <strong>Focus:</strong> {workout.focusArea}
                  </p>
                  <span
                    className={`badge ${difficultyBadgeClass(workout.difficulty)}`}
                  >
                    {workout.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
