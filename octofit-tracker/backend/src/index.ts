import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = Number(process.env.PORT ?? 8000);
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit-tracker';

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

async function start() {
  await mongoose.connect(MONGO_URI);
  console.log(`Connected to MongoDB at ${MONGO_URI}`);
  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
}

start().catch((error) => {
  console.error('Failed to start backend:', error);
  process.exit(1);
});
