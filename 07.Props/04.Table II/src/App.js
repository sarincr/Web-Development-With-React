// App.js
import React from 'react';
import TableComponent from './TableComponent';

const App = () => {
  return (
    <div>
      <h1>People Table</h1>
      {/* Passing data to TableComponent directly */}
      <TableComponent
        data={[
          { name: 'Alice', age: 30 },
          { name: 'Bob', age: 25 },
          { name: 'Charlie', age: 35 },
        ]}
      />
    </div>
  );
};

export default App;
