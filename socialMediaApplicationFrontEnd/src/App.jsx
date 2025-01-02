
import './App.css'
import LandingPage from './component/landingPage';
import LoginPage from './component/loginPage';
import RegisterPage from './component/registrationPage';
import DashboardPage from './component/dashboard';
import ProfilePage from './component/profilePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dasboard" element={<DashboardPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
            </Routes>
        </Router>
  )
}

export default App
