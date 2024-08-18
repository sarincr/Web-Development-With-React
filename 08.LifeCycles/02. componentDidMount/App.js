import React from 'react';

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      message: 'Constructor executed, state initialized',
    };
    console.log(this.state.message);
  }

  componentDidMount() {
    // This method runs after the component is mounted
    console.log('Component has mounted');
  }

  render() {
    console.log("Render method executed");
    return (
      <div>
        <h1>Component Lifecycle</h1>
      </div>
    );
  }
}

export default SimpleComponent;
