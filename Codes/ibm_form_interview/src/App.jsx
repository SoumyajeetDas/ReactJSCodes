import { useState } from "react";
import "./App.css";
import Table from "./Table";

const formatHobbies = (hobbies) => {
  let output = [];

  for (let key in hobbies) {
    if (hobbies[key]) {
      output.push(key?.toUpperCase());
    }
  }

  return output.join(", ");
};

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    branch: "",
    gender: "",
    hobbies: {
      cycling: false,
      readingbooks: false,
      cricket: false,
    },
  });

  const [tableFormData, setTableFormData] = useState([]);

  const handleChange = (e) => {
    if (e.target.name !== "hobbies")
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    else {
      setFormData({
        ...formData,

        hobbies: {
          ...formData.hobbies,
          [e.target.id]: e.target.checked ? true : false,
        },
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let formTableData = {
      ...formData,
      hobbies: formatHobbies(formData?.hobbies),
    };

    let arr = [];

    for (let key in formTableData) {
      if (formTableData[key]) {
        arr.unshift({
          key,
          value: formTableData[key],
        });
      }
    }

    setTableFormData(arr);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder={"Name"}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="Password"
          name="password"
          placeholder={"Password"}
          onChange={handleChange}
        />
        <br />
        <br />
        <select name="branch" onChange={handleChange}>
          <option value="">--Enter branch--</option>
          <option value="CSE">CSE</option>
          <option value="ETC">ETC</option>
        </select>
        <br />
        <br />
        <input
          type="radio"
          value="male"
          id="male"
          name="gender"
          onChange={handleChange}
        />
        <label htmlFor="male">Male</label>

        <input
          type="radio"
          value="female"
          id="female"
          name="gender"
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>

        <br />
        <br />

        <input
          type="checkbox"
          id="cycling"
          name="hobbies"
          onChange={handleChange}
        />
        <label htmlFor="cycling">Cycling</label>
        <br />
        <br />

        <input
          type="checkbox"
          id="reading books"
          name="hobbies"
          onChange={handleChange}
        />
        <label htmlFor="readingbooks">Reading books</label>
        <br />
        <br />

        <input
          type="checkbox"
          id="cricket"
          name="hobbies"
          onChange={handleChange}
        />
        <label htmlFor="cricket">Cricket</label>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <Table tableData={tableFormData} />
    </div>
  );
}
