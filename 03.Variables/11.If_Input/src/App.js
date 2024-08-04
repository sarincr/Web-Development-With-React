import React from 'react';

function App() {
  let inputRef = React.createRef(); // Ref to get input value

  function handleClick() {
    const inputValue = inputRef.current.value;
    if (inputValue === 'Hello') {
      alert('You entered Hello JS!');
    } else {
      alert('You entered: ' + inputValue);
    }
  }

  return (
    <div className="App">
      <h1>React App with If Logic</h1>
      <form>
        <input type="text" ref={inputRef} placeholder="Enter something..." />
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
