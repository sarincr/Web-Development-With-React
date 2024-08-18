import React, { Component } from 'react';

class ColorToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRed: true,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // Log a message every time the component updates
    console.log('State is changed');
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
