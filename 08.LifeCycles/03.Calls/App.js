import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initial state with counter
    this.state = {
      counter: 0,
    };
  }

  // Lifecycle method called once the component has mounted
  componentDidMount() {
    console.log("Component has mounted");
    // Log the initial counter value
    console.log("Initial counter value:", this.state.counter);

    // Handler for button click defined here
    this.handleClick = () => {
      this.setState(
        prevState => ({ counter: prevState.counter + 1 }),
        () => console.log("Updated counter value:", this.state.counter) // Log updated value
      );
    };
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handleClick}>Increase Counter</button>
      </div>
    );
  }
}

export default App;
