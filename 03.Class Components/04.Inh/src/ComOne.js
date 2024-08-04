
import React, { Component } from 'react';

// Child component
class Child extends Component {
  handleClick = () => {
    // Call the function passed down from the parent component
    this.props.onButtonClick();
  }

  render() {
    return (
      <div>
        <p>Child component</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

// Parent component
class Parent extends Component {
  state = {
    message: 'Hello from Parent!',
  };

  handleButtonClick = () => {
    // Update state when button in Child component is clicked
    this.setState({ message: 'Button clicked!' });
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <Child onButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default Parent;
