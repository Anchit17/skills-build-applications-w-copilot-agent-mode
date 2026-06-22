import { Document, model, Schema } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  description: string;
  captain: string;
  memberCount: number;
}

const teamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    captain: { type: String, required: true },
    memberCount: { type: Number, required: true, min: 1 }
  },
  { timestamps: true }
);

export default model<ITeam>('Team', teamSchema);
