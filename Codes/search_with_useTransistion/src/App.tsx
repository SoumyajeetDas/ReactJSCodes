import { useEffect, useRef, useState, useTransition } from "react";
import "./App.css";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const result = useRef<Todo[]>([]);
  const [showData, setShowData] = useState<Todo[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleData = (data: string) => {
    const filteredData = result?.current?.filter((x) => {
      if (data?.length > 0) {
        const regex = new RegExp(data, "i");
        return x?.title?.match(regex);
      } else {
        return false;
      }
    });

    startTransition(() => {
      setShowData(filteredData);
    });
  };

  useEffect(() => {
    (async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const response = await data.json();

      // setResult(response);

      result.current = response;
      // setShowData(response);
    })();
  }, []);
  return (
    <div>
      <input type="text" onChange={(e) => handleData(e.target.value)} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        showData?.map((x) => <div key={x.id}>{x.title}</div>)
      )}
    </div>
  );
}

export default App;
