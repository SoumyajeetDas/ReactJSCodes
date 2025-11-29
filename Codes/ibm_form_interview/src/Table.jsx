import React from "react";

const Table = ({ tableData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((val) => (
          <tr key={val?.key}>
            <td>{val?.key}</td>
            <td>{val?.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// This comparison will be done with length
// const TableMemo = React.memo(Table, (prevProps, currentProps) => {
//   return prevProps.tableData.length === currentProps.tableData.length;
// });

// This comaprison will be done on Referential Equality
const TableMemo = React.memo(Table);

export default TableMemo;
