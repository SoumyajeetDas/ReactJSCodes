const Table = ({ name, password, branch, gender, hobbies }) => {
  console.log(hobbies);
  return (
    <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {name && (
          <tr>
            <td>name</td>
            <td>{name}</td>
          </tr>
        )}
        {password && (
          <tr>
            <td>password</td>
            <td>{password}</td>
          </tr>
        )}
        {branch && (
          <tr>
            <td>branch</td>
            <td>{branch}</td>
          </tr>
        )}
        {gender && (
          <tr>
            <td>gender</td>
            <td>{gender}</td>
          </tr>
        )}
        {hobbies && (
          <tr>
            <td>hobbies</td>
            <td>{hobbies}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
