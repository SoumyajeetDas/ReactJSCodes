import { useState } from "react";
import "./App.css";
import Table from "./Table";

export default function App() {
  const [value, setValue] = useState({
    name: "",
    password: "",
    gender: "",
    branch: "",
    hobbies: {
      cycling: false,
      coding: false,
      writing: false,
    },
  });

  const [formValues, setFormValues] = useState([]);

  const handleChange = (e) => {
    if (e.target.name !== "hobbies") {
      setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      const hobbies = value.hobbies;

      Object.assign(hobbies, { ...hobbies, [e.target.id]: e.target.checked });

      setValue({ ...value, hobbies });
    }
  };

  let formatHobbies = () => {
    const hobbies = value.hobbies;

    let output = [];

    for (let key in hobbies) {
      hobbies[key] ? output.push(key) : null;
    }

    return output.join(", ");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let output = JSON.parse(JSON.stringify(formValues));

    let formDataValue = { ...value, hobbies: formatHobbies() };

    const isPresent = output.findIndex(
      (val) => val.name === formDataValue.name
    );

    if (isPresent < 0) {
      output.unshift({ name: formDataValue.name, values: [] });

      for (let key in formDataValue) {
        if (formDataValue[key]) {
          output[0].values.push({ [key]: formDataValue[key] });
        }
      }
    } else {
      output[isPresent].values = [];
      for (let key in formDataValue) {
        if (formDataValue[key]) {
          output[isPresent].values.unshift({ [key]: formDataValue[key] });
        }
      }
    }

    setFormValues([...output]);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="passowrd">Password : </label>
        <input
          type="password"
          id="passowrd"
          name="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>
        <br />
        <br />
        <select name="branch" onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="CSE">CSE</option>
          <option value="ETC">ETC</option>
        </select>
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
          id="coding"
          name="hobbies"
          onChange={handleChange}
        />
        <label htmlFor="coding">Coding</label>
        <br />
        <br />
        <input
          type="checkbox"
          id="writing"
          name="hobbies"
          onChange={handleChange}
        />
        <label htmlFor="writing">Writing</label>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <Table formValues={formValues} />
    </div>
  );
}
