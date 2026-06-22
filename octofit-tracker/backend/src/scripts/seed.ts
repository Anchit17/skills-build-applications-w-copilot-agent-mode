import { connectDatabase, MONGO_URI } from '../db.ts';
import User from '../models/user.ts';
import Team from '../models/team.ts';
import Activity from '../models/activity.ts';
import Leaderboard from '../models/leaderboard.ts';
import Workout from '../models/workout.ts';

async function seed() {
  console.log('Seed the octofit_db database with test data');
  await connectDatabase();
  console.log(`Connected to MongoDB at ${MONGO_URI}`);

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({})
  ]);

  const teams = await Team.create([
    { name: 'Sea Sprinters', description: 'Performance-focused rowing and running team', captain: 'Avery Octo', memberCount: 10 },
    { name: 'Core Kraken', description: 'Strength and mobility training collective', captain: 'Jordan Tide', memberCount: 12 }
  ]);

  const users = await User.create([
    { name: 'Avery Octo', email: 'avery@octofit.com', role: 'trainer', teamId: teams[0].id },
    { name: 'Jordan Tide', email: 'jordan@octofit.com', role: 'member', teamId: teams[1].id },
    { name: 'Kai Marina', email: 'kai@octofit.com', role: 'member', teamId: teams[0].id }
  ]);

  const workouts = await Workout.create([
    { title: 'Full Body HIIT', description: 'Dynamic interval training for strength and stamina', difficulty: 'intermediate', durationMinutes: 30, focusArea: 'full body' },
    { title: 'Recovery Stretch', description: 'Gentle mobility and recovery session', difficulty: 'beginner', durationMinutes: 20, focusArea: 'flexibility' },
    { title: 'Power Row Circuit', description: 'Rowing and core circuit to build endurance', difficulty: 'advanced', durationMinutes: 40, focusArea: 'cardio' }
  ]);

  await Activity.create([
    { userId: users[0].id, type: 'run', durationMinutes: 32, caloriesBurned: 320, distanceKm: 5.1, date: new Date('2026-06-10T07:30:00Z') },
    { userId: users[1].id, type: 'yoga', durationMinutes: 45, caloriesBurned: 180, date: new Date('2026-06-11T17:00:00Z') },
    { userId: users[2].id, type: 'rowing', durationMinutes: 50, caloriesBurned: 540, distanceKm: 8, date: new Date('2026-06-12T06:15:00Z') }
  ]);

  await Leaderboard.create([
    { userId: users[0].id, userName: users[0].name, teamName: teams[0].name, points: 1840, rank: 1 },
    { userId: users[2].id, userName: users[2].name, teamName: teams[0].name, points: 1710, rank: 2 },
    { userId: users[1].id, userName: users[1].name, teamName: teams[1].name, points: 1595, rank: 3 }
  ]);

  console.log('Seed data inserted successfully');
  process.exit(0);
}

seed().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
