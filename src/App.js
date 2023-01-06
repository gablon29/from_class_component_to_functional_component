import logo from './logo.svg';
import './App.css';
import Pasaje from './components/Pasaje';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Pasaje/>
      </header>
    </div>
  );
}

export default App;
