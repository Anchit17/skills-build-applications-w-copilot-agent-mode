import { Document, model, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  role: 'member' | 'trainer' | 'admin';
  teamId?: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    role: { type: String, required: true, enum: ['member', 'trainer', 'admin'] },
    teamId: { type: String }
  },
  { timestamps: true }
);

export default model<IUser>('User', userSchema);
