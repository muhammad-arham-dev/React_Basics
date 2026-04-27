export default function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10 }}>
      {children}
    </div>
  );
}