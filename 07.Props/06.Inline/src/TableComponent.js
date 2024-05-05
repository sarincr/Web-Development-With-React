import React from 'react';

const TableComponent = ({ name, age }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name:</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Age:</th>
          <td>{age}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;
