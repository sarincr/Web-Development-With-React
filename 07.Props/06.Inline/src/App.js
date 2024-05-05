import React from 'react';
import TableComponent from './TableComponent';

const App = () => {

  return (
    <div>
      <h1>People Table</h1>
      
        <TableComponent name={"Alice"} age={20} />
        <TableComponent name={"John"} age={30} />
    </div>
  );
};

export default App;
