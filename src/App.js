import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  return (
    <div>
      <h1>Loading from Rest Countries API</h1>
    </div>
  );
}

export default App;
