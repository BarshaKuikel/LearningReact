import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterForm from './pages/register';
import LoginForm from './pages/loginForm'; // We will create this next

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect empty path to login */}
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;