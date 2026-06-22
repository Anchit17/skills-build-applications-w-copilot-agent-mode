import { Document, model, Schema } from 'mongoose';

export interface IWorkout extends Document {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationMinutes: number;
  focusArea: string;
}

const workoutSchema = new Schema<IWorkout>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: {
      type: String,
      required: true,
      enum: ['beginner', 'intermediate', 'advanced']
    },
    durationMinutes: { type: Number, required: true, min: 5 },
    focusArea: { type: String, required: true }
  },
  { timestamps: true }
);

export default model<IWorkout>('Workout', workoutSchema);
