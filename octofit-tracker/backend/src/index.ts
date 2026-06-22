import { app, PORT } from './app.ts';
import { connectDatabase, MONGO_URI } from './config/database.ts';

async function start() {
  await connectDatabase();
  console.log(`Connected to MongoDB at ${MONGO_URI}`);
  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
}

start().catch((error) => {
  console.error('Failed to start backend:', error);
  process.exit(1);
});
