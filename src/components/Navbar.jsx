import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/products">Products</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}