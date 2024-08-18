import React, { Component } from 'react';

class ColorToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRed: true,
    };
  }

  // Define the function to be called on component update
  handleColorChange = () => {
    console.log('The color has changed');
    // You can add more functionality here if needed
  };

  componentDidUpdate(prevProps, prevState) {
    // Call the handleColorChange function when the component updates
    this.handleColorChange();
  }

  toggleColor = () => {
    this.setState((prevState) => ({
      isRed: !prevState.isRed,
    }));
  };

  render() {
    const backgroundColor = this.state.isRed ? 'red' : 'green';

    return (
      <div style={{ backgroundColor, height: '100vh', transition: 'background-color 0.5s' }}>
        <button onClick={this.toggleColor}>Toggle Color</button>
      </div>
    );
  }
}

export default ColorToggle;
