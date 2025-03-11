import React, { useState, useEffect} from "react";
import { getAllProductos } from "../servicios/ProductoServicio";
import Producto from "./Producto";

function Productos(){
    
    const [loading, setLoading] = useState(true);
    const [Productos, setProductos] = useState();
    const [buscar, setBuscar] = useState("Iphone");

    useEffect(() => {
        const request = async () => {
            try {
                const response = await getAllProductos(buscar);
                console.log(response.results);
                setProductos(response.results);
                setLoading(false);
        }   catch (evento) {
            console.log(evento);
        }
    };
    request();

}, [buscar]);

    const handleChange = (event) => {

        const value = event.target.value;
        console.log(value);
        setBuscar(value);
    }

    if (loading) {
    return (    
    <div>Cargando...</div>
)
} else {
    return (
        <>
        <div id="buscador">
            <input type="text"
            name="buscar"
            value={buscar}
            onChange={handleChange}
            placeholder="buscar" /> 
            <br />
        </div>
        
        {Productos.slice(0,10).map((producto) =>
        <Producto
            id={producto.id}
            imagen={producto.thumbnail}
            nombre={producto.title}
            precio={producto.price}
        />
        )}
        </>
    );
}
}

export default Productos;