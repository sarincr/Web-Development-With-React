import logo from './logo.svg';
import './App.css';

function App() {

  const isHighlighted = false; // Replace with your condition
  
    return (
      <div className={isHighlighted ? 'highlighted' : "'isNotHighlighted'"}>
        This div will have the class "highlighted" if isHighlighted is true
      </div>
    );
  }
  

export default App;
