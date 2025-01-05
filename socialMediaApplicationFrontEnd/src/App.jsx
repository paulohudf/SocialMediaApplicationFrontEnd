import './App.css';
import LandingPage from './component/landingPage';
import LoginPage from './component/loginPage';
import RegisterPage from './component/registrationPage';
import DashboardPage from './component/dashboard';
import ProfilePage from './component/profilePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './route/protectedRoute'; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;