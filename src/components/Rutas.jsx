import React from "react";
import Home from "../paginas/Home";
import Loguearse from "../paginas/Loguearse";
import Registro from "../paginas/Registro";
import {Routes, Route} from 'react-router-dom'

function Rutas(){

    return(
        <Routes>
	        <Route path="/" element= {<Home />} />
            <Route path="/Loguearse" element= {<Loguearse />} />
            <Route path="/Registro" element= {<Registro />} />
        </Routes>
    );
}

export default Rutas;