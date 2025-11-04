import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

function Dashboard() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">Dashboard</h1>
      {user ? (
        <p className="text-gray-700">Welcome, {user.name} 👋</p>
      ) : (
        <p className="text-gray-500">You are not logged in</p>
      )}
    </div>
  );
}

export default Dashboard;
