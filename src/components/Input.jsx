export default function Input({ label, name, type="text", value, onChange, error }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <label>{label}</label><br />
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}