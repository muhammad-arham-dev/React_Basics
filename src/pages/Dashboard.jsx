import { Link, Routes, Route } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import DashboardSettings from "./DashboardSettings";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <Link to="">Home</Link> |  
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="settings" element={<DashboardSettings />} />
      </Routes>
    </div>
  );
}