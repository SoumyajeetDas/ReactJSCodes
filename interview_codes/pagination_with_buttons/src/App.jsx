import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  let [data, setData] = useState([]);
  let [filterredData, setFiltererdData] = useState([]);
  let [page, setPage] = useState(1);
  const [active, setActive] = useState(0);

  const pageSize = 10;

  let nPages = useMemo(() => {
    return Math.ceil(data.length / pageSize);
  }, [data]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFiltererdData(
          [...data].slice(
            (page - 1) * pageSize,
            (page - 1) * pageSize + pageSize,
          ),
        );
      });
  }, []);

  useEffect(() => {
    (() => {
      setFiltererdData(
        [...data].slice(
          (page - 1) * pageSize,
          (page - 1) * pageSize + pageSize,
        ),
      );
    })();
  }, [page]);

  const handleClick = (page) => () => {
    setPage(page);
    setActive(page - 1);
  };

  return (
    <div className="App">
      <div id="box">
        {filterredData.map((v) => (
          <p key={v.id} id={v.id}>
            {v.title}
          </p>
        ))}
      </div>
      <div id="buttons">
        {[...Array(nPages)].map((_, i) => (
          <button
            className={i === active ? "selected" : ""}
            onClick={handleClick(i + 1)}
            key={i}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
