# OctoFit Tracker Frontend

React 19 frontend for the OctoFit Tracker multi-tier application.

## Setup

### Prerequisites
- Node.js LTS
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.local.example .env.local
```

3. (Optional) For GitHub Codespaces, add your codespace name to `.env.local`:
```
VITE_CODESPACE_NAME=your-codespace-name
```

### Development

Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`.

### Build

Create a production build:
```bash
npm run build
```

### Environment Variables

#### VITE_CODESPACE_NAME
- **Required for Codespaces deployment**
- GitHub Codespaces name (e.g., `cuddly-train-abc123`)
- Used to build API URL: `https://${VITE_CODESPACE_NAME}-8000.app.github.dev`
- Leave empty or omit for localhost development

When `VITE_CODESPACE_NAME` is set, the frontend will connect to:
- **API Base URL**: `https://${VITE_CODESPACE_NAME}-8000.app.github.dev`
- **Endpoints**: `/api/users`, `/api/teams`, `/api/activities`, `/api/leaderboard`, `/api/workouts`

When `VITE_CODESPACE_NAME` is not set, the frontend defaults to localhost:
- **API Base URL**: `http://localhost:8000`

## Project Structure

```
src/
├── components/          # Page components
│   ├── Activities.tsx   # Activity tracking
│   ├── Leaderboard.tsx  # Competitive rankings
│   ├── Teams.tsx        # Team management
│   ├── Users.tsx        # User directory
│   └── Workouts.tsx     # Workout plans
├── utils/
│   └── api.ts           # API configuration and utilities
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
└── index.css            # Bootstrap + custom styles
```

## Features

- **React Router** - Client-side navigation
- **Bootstrap 5** - Responsive UI components
- **Vite** - Fast development server and build
- **TypeScript** - Type-safe code
- **Codespaces Support** - Environment-aware API configuration
- **Error Handling** - Graceful fallbacks for API errors

## Component Features

- **Users Page** - Browse community members
- **Teams Page** - View team information and membership
- **Activities Page** - Track fitness activities
- **Leaderboard Page** - Competitive rankings
- **Workouts Page** - Browse workout plans

All components:
- Load data from backend APIs
- Handle loading and error states
- Support both paginated and array responses
- Use Bootstrap for consistent styling
