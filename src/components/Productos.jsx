import React, { useState, useEffect} from "react";
import { getAllProductos } from "../servicios/ProductoServicio";
import Producto from "./Producto";

function Productos(){
    
    const [loading, setLoading] = useState(true);
    const [Productos, setProductos] = useState();

    useEffect(() => {
        const request = async () => {
            try {
                const response = await getAllProductos();
                console.log(response);
                setProductos(response.results);
                setLoading(false);
        }   catch (evento) {
            console.log(evento);
        }
    };
    request();

}, []);

    if (loading) {
    return (    
    <div>Cargando...</div>
)
} else {
    return (
        <>
        {Productos.map((producto) =>
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