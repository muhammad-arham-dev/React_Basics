import { useState } from "react";

function Item({ value }) {
  console.log("Item render");
  return <li>{value}</li>;
}

function ItemList() {
  const [items, setItems] = useState([1, 2, 3]);

  return (
    <div>
      <h2>Task 9: List Optimization</h2>
      <button
        onClick={() => setItems([...items, items.length + 1])}
      >
        Add Item
      </button>

      <ul>
        {items.map((item) => (
          <Item key={item} value={item} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;