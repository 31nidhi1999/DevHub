import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProctectedRoute";

function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-indigo-600 text-white p-4 flex justify-between">
        <span className="font-bold text-xl">DevHub</span>
        <div className="space-x-4">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
