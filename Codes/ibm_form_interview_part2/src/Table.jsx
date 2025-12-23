import React from "react";

const Table = ({ formValues }) => {
  console.log(formValues);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Values</th>
        </tr>
      </thead>
      <tbody>
        {formValues?.map((val) => (
          <tr key={val?.name}>
            <td>{val.name}</td>
            <td>
              <table>
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {val.values.map((x) => (
                    <tr key={Object.keys(x)[0]}>
                      <td>{Object.keys(x)[0]}</td>
                      <td>{x[Object.keys(x)[0]]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// You don't need to use React.memo if the React Compiler is enabled in vite.config.js
const MemoizedTable = React.memo(Table);

export default MemoizedTable;
