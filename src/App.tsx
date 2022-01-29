import './App.css';
import Home from './components/home.components'

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: changeBackground()}} className='App-header'>
        <Home />
      </div>
    </div>
  );


  function changeBackground() {
    const t = new Date().getHours();
    if (t > 6 && t < 10) {
     return '#6ad9ff'
    } else if (t > 10 && t < 18) {
      return "#ffc107";
    } else {
      return "#192048";
    }
  }
}

export default App;
