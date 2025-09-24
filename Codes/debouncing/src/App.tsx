import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<string | null>(null);
  const [updatedData, setUpdatedData] = useState<string | null>(null);

  useEffect(() => {
    const interval = setTimeout(() => {
      setUpdatedData(data);
    }, 500);

    return () => clearTimeout(interval);
  }, [data]);

  return (
    <div>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <br />

      {updatedData}
    </div>
  );
}

export default App;
