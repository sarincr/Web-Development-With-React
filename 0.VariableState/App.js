import React from 'react';

function App() {

  let x = "ABCD";
  function abc(){
    
    x="EFGH"; 
    alert(x);

  }

  return (
    <div>
    <h1>{x}</h1>

  <button onClick={abc}>  Click here </button>
  </div>
  )
}

export default App;
