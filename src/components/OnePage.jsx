import { useState, useEffect, useTransition } from "react";

function OnePage() {
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.log("Page loaded");
  }, []);

  const loadItems = () => {
    startTransition(() => {
      const newItems = [];
      for (let i = 1; i <= 200; i++) {
        newItems.push("Item " + i);
      }
      setItems(newItems);
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My One Page</h1>

      <button onClick={loadItems}>Load Items</button>

      {isPending && <p>Loading...</p>}

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default OnePage;
