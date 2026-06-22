import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { API_BASE_URL } from './utils/api';
import Users from './components/Users';
import Teams from './components/Teams';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Workouts from './components/Workouts';

function Home() {
  return (
    <div className="container mt-5">
      <h1>🏋️ OctoFit Tracker</h1>
      <p className="lead">
        Modern multi-tier fitness tracker built with React 19, Vite, Express, and MongoDB.
      </p>
      <div className="alert alert-info">
        <strong>API Base URL:</strong> <code>{API_BASE_URL}</code>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">👥 Users</h5>
              <p className="card-text">Manage OctoFit community members</p>
              <Link to="/users" className="btn btn-primary">
                View Users
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">🤝 Teams</h5>
              <p className="card-text">Browse competitive teams</p>
              <Link to="/teams" className="btn btn-primary">
                View Teams
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">📊 Activities</h5>
              <p className="card-text">Track fitness activities</p>
              <Link to="/activities" className="btn btn-primary">
                View Activities
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">🏆 Leaderboard</h5>
              <p className="card-text">Check competitive rankings</p>
              <Link to="/leaderboard" className="btn btn-primary">
                View Leaderboard
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">💪 Workouts</h5>
              <p className="card-text">Browse workout plans</p>
              <Link to="/workouts" className="btn btn-primary">
                View Workouts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            OctoFit Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/teams" className="nav-link">
                  Teams
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/activities" className="nav-link">
                  Activities
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/leaderboard" className="nav-link">
                  Leaderboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/workouts" className="nav-link">
                  Workouts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2026 OctoFit Tracker. Built with React 19, Vite, Express, and MongoDB.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
