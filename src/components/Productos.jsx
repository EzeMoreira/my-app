import React, { useState, useEffect} from "react";
import { getAllProductos } from "../servicios/ProductoServicio";

function Productos(){
    
    const [Productos, setProductos] = useState();

    useEffect(() => {
        const request = async () => {
            try {
                const response = await getAllProductos();
                console.log(response);
                setProductos(response.results);
        }   catch (evento) {
            console.log(evento);
        }
    };
    request();
}, []);

    return(
        <div>
            <h1>Muestra de los Productos</h1>
        </div>
    )
}

export default Productos;