import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';

mongoose.set('strictQuery', true);

async function connectDatabase() {
  return mongoose.connect(MONGO_URI);
}

export { connectDatabase, MONGO_URI };
