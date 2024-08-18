import React from 'react';

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      message: 'Constructor executed, state initialized',
    };
    // Use this.state.message to refer to the state property
    console.assert(this.state.message);
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default SimpleComponent;
