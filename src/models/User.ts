import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  xp: number;
  level: number;
  badges: string[];
  progress: {
    javascript: number;
    git: number;
    mysql: number;
  };
  completedLessons: string[];
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  badges: { type: [String], default: [] },
  progress: {
    javascript: { type: Number, default: 0 },
    git: { type: Number, default: 0 },
    mysql: { type: Number, default: 0 },
  },
  completedLessons: { type: [String], default: [] },
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
