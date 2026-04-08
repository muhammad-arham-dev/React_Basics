import { useState } from "react";
import Input from "../components/Input";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });

  const [errors, setErrors] = useState({});

  function validate() {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.password) newErrors.password = "Password required";
    if (form.password !== form.confirm)
      newErrors.confirm = "Passwords do not match";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      console.log("Registration Successful:", form);
    }
  }

  return (
    <>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
        <Input label="Email" name="email" value={form.email} onChange={handleChange} error={errors.email} />
        <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} error={errors.password} />
        <Input label="Confirm Password" name="confirm" type="password" value={form.confirm} onChange={handleChange} error={errors.confirm} />

        <button type="submit">Register</button>
      </form>
    </>
  );
}