import './App.css';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import Registro from './paginas/Registro';
import Home from './paginas/Home';
import Loguearse from './paginas/Loguearse';
import cartel from "./cartelNav.png";
import Rutas from './components/Rutas';
import Footer from './components/Footer';

function App() {

  return (
      <Router>  
          <h1 class="box">Games zone</h1>
	        <div className="App">
            <nav>
              <ul>
                <Link to="/" element={<Home />} className="list">
                  Home
                </Link>
                <Link to="/Registro" element={<Loguearse />} className="list">
                  Registro
                </Link>
                <Link to="/Loguearse" element={<Registro />} className="list">
                  Loguearse
                </Link>
              </ul>
            </nav>
            <img src={cartel} className="AppLogo" alt="Cartel-de-juego"/>
          </div>
          <Rutas/>
          <Footer/>
      </Router>
  );
}

export default App;
