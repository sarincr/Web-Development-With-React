// src/App.js
import React from 'react';

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Hello, Bootstrap!</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Sample" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
