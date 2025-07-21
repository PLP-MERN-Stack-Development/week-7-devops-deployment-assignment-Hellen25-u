import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/items").then((res) => {
      setItems(res.data);
    });
  }, []);

  const addItem = async () => {
    const res = await axios.post("http://localhost:5000/items", { name });
    setItems([...items, res.data]);
    setName("");
  };

  return (
    <div>
      <h1>Items</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

