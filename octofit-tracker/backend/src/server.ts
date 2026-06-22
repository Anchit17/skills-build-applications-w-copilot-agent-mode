import { app, PORT, API_BASE_URL } from './app.ts';
import { connectDatabase, MONGO_URI } from './config/database.ts';

const CODESPACE_NAME = process.env.CODESPACE_NAME;

async function startServer() {
  try {
    // Connect to MongoDB
    await connectDatabase();
    console.log(`Connected to MongoDB at ${MONGO_URI}`);

    // Start Express server
    app.listen(PORT, () => {
      console.log(`Backend running on ${API_BASE_URL}`);
      
      if (CODESPACE_NAME) {
        console.log(`Codespaces URL: https://${CODESPACE_NAME}-8000.app.github.dev`);
      } else {
        console.log(`Localhost URL: http://localhost:${PORT}`);
      }
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
