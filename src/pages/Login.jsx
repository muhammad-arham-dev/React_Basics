import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // ⭐ Simple Validation ⭐
    if (!form.email || !form.password) {
      alert("Email and Password are required");
      return;
    }

    // ⭐ Save login state in localStorage (IMPORTANT) ⭐
    localStorage.setItem("auth", "true");

    alert("Login Successful!");

    // ⭐ Redirect to dashboard ⭐
    window.location.href = "/dashboard";
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />

        <button type="submit">Login</button>
      </form>
    </>
  );
}