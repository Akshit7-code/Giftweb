import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './pages/Admin';
import UserHome from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserHome />} />
        {/* Only those with this exact link can access the panel */}
        <Route path="/ankur-admin-9482" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;