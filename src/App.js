import './App.css';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import cartel from "./cartelNav.png"
import Home from './paginas/Home';
import Loguearse from './paginas/Loguearse';
import Registro from './paginas/Registro';

function App() {

  return (
      <Router>
          <h1>Games zone</h1>
	        <div className="App">
            <nav>
              <ul>
                <Link to="/" element={<Home />} class="list">
                  Home
                </Link>
                <Link to="/Registro" element={<Loguearse />} class="list">
                  Registro
                </Link>
                <Link to="/Loguearse" element={<Registro />} class="list">
                  Loguearse
                </Link>
              </ul>
            </nav>
            <img src={cartel} className="AppLogo" alt="Cartel-de-juego"/>
          </div>
      </Router>
  );
}

export default App;
