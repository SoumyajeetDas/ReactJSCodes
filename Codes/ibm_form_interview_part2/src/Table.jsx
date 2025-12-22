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
          <tr>
            <td>{val.name}</td>
            <td>
              <table>
                <thead>
                  <th>Field</th>
                  <th>Value</th>
                </thead>
                <tbody>
                  {val.values.map((x) => (
                    <tr>
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

export default Table;
