import './App.css';
import Home from './paginas/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Rutas from './components/Rutas';

function App() {

  return (
      <Router>
	        <Rutas />
      </Router>
  );
}

export default App;
