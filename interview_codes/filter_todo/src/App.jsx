import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [masterTodo, setMasterTodo] = useState([]);
  const ref = useRef(null);

  let getFilteredTodos = (value) => {
    let filteredTodo = [];

    switch (value) {
      case "ACTIVE":
        filteredTodo = masterTodo?.filter((v) => !v.isChecked);
        break;

      case "COMPLETED":
        filteredTodo = masterTodo?.filter((v) => v.isChecked);
        break;

      default:
        filteredTodo = structuredClone(masterTodo);
    }

    setTodo([...filteredTodo]);
  };

  useEffect(() => {
    const value = ref.current.value;

    getFilteredTodos(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [masterTodo]);

  const handleKeyDown = (e) => {
    if (!e.target.value) return;

    let isPresent = todo?.find(
      (v) =>
        new RegExp(v.value, "i")?.test(e.target.value) &&
        v.value?.length === e.target.value.length,
    );

    if (isPresent) return;

    if (e.key === "Enter") {
      setMasterTodo((prev) => [
        ...prev,
        {
          value: e.target.value,
          isChecked: false,
        },
      ]);
    }
  };

  const handleChange = (value) => (e) => {
    let data = structuredClone(masterTodo);

    let index = masterTodo.findIndex((v) => v.value === value);

    data[index].isChecked = e.target.checked;

    setMasterTodo([...data]);
  };

  const handleSelectChange = (e) => {
    let value = e.target.value;

    getFilteredTodos(value);
  };
  return (
    <div className="App">
      <input type="text" onKeyDown={handleKeyDown} />
      <select ref={ref} onChange={handleSelectChange}>
        <option value="ALL">ALL</option>
        <option value="ACTIVE">ACTIVE</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>

      <div>
        <ul>
          {todo?.map((v) => (
            <li key={v.value}>
              <input
                type="checkbox"
                checked={v.isChecked}
                onChange={handleChange(v.value)}
              />
              <span
                style={{
                  textDecoration: v.isChecked ? "line-through" : "none",
                }}
              >
                {v?.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
