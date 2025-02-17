import './App.css';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';

function App() {

  return (
      <Router>
	        <div className="App">
            <nav>
              <ul>
                <Link to="/" class="list">
                  Home
                </Link>
                <Link to="/Registro" class="list">
                  Registro
                </Link>
                <Link to="/Loguearse" class="list">
                  Loguearse
                </Link>
              </ul>
            </nav>
          </div>
      </Router>
  );
}

export default App;
