import React, { Component } from 'react';

class ColorToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRed: true,
      lastUpdate: '', // State property to store the last update time
    };
  }

  // Define the function to be called on component update
  handleColorChange = () => {
    const currentTime = new Date().toLocaleTimeString();
    console.log('handleColorChange called. Current time:', currentTime); // Debug log
    // Update the state only if the current time is different from the last update time
    if (this.state.lastUpdate !== currentTime) {
      this.setState({ lastUpdate: currentTime }); // Update the last update time
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // Call the handleColorChange function only if the color has actually changed
    if (prevState.isRed !== this.state.isRed) {
      this.handleColorChange();
    }
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
        <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: 'white' }}>
          Last update: {this.state.lastUpdate || 'No updates yet'}
        </div>
      </div>
    );
  }
}

export default ColorToggle;
