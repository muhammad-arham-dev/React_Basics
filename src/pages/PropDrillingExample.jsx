function Child3({ message }) {
  return <p>{message}</p>;
}

function Child2({ message }) {
  return <Child3 message={message} />;
}

function Child1({ message }) {
  return <Child2 message={message} />;
}

function PropDrillingExample() {
  return (
    <div>
      <h2>Task 7: Prop Drilling</h2>
      <Child1 message="Hello from parent" />
    </div>
  );
}

export default PropDrillingExample;