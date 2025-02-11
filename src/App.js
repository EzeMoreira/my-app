import imagen from './ceros-unos.png';
import './App.css';

function App() {

  let num = 1;

  return (
    <div className="App">
      <header className="App-header">
        <img src={imagen} className="App-logo" alt="logo" />
        <p>Esta imagen es la numero {num}</p>
      </header>
    </div>
  );
}

export default App;
