import { Document, model, Schema } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  userId: string;
  userName: string;
  teamName: string;
  points: number;
  rank: number;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>(
  {
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    teamName: { type: String, required: true },
    points: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 }
  },
  { timestamps: true }
);

export default model<ILeaderboardEntry>('Leaderboard', leaderboardSchema);
