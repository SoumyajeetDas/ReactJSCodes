import { useEffect, useState } from "react";
import "./App.css";

let data1 = [
  {
    name: "A",
    marks: "66%",
    reg_id: 1,
  },
  {
    name: "B",
    marks: "86%",
    reg_id: 2,
  },
  {
    name: "C",
    marks: "96%",
    reg_id: 3,
  },
];

let data2 = [
  {
    name: "A",
    marks: "66%",
    reg_id: 1,
  },
  {
    name: "I",
    marks: "86%",
    reg_id: 2,
  },
  {
    name: "J",
    marks: "96%",
    reg_id: 3,
  },
];

function App() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  let [box2, setBox2] = useState([]);

  let fetchDataMock = (arr, delay) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(arr);
      }, delay);
    });

  const handleMove = (i) => () => {
    let val = data[i];

    let stud = [...data]?.filter((_, index) => i !== index);

    setData([...stud]);

    setBox2((prev) => [...prev, val]);
  };

  const handleDelete = (i) => () => {
    let stud = [...data]?.filter((_, index) => i !== index);

    setData([...stud]);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      let data = await Promise.allSettled([
        fetchDataMock(data1, 3000),
        fetchDataMock(data2, 2000),
      ]);

      let resp1 = data[0]?.value;
      let resp2 = data[1]?.value;

      setData([...resp1, ...resp2]);
      setLoading(false);
    })();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div id="wrapper">
          <div className="box">
            {data?.map((v, i) => (
              // Crypto.randomUUID() in the key doesn't work. If you have any same data from backend, you have to
              // talk to backend team to provide unique ids for each data object.
              <div className="content" key={v?.name + crypto.randomUUID()}>
                <div className="content-left">
                  <p>{v?.name}</p>
                </div>
                <div className="content-right">
                  <p>Marks : {v?.marks}</p>
                  <p> Reg_id: {v?.reg_id}</p>
                </div>
                <div className="content-button">
                  <button onClick={handleMove(i)}>Move</button>
                  <button onClick={handleDelete(i)}>delete</button>
                </div>
              </div>
            ))}
          </div>
          <div className="box">
            {box2?.map((v) => (
              // Crypto.randomUUID() in the key doesn't work. If you have any same data from backend, you have to
              // talk to backend team to provide unique ids for each data object.
              <div className="content-box2" key={v?.name + crypto.randomUUID()}>
                <div className="content-left">
                  <p>{v?.name}</p>
                </div>
                <div className="content-right">
                  <p>Marks : {v?.marks}</p>
                  <p> Reg_id: {v?.reg_id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
