import React from "react";

function Producto({id, imagen, nombre, precio}){

    return(
        <div className="contenedorProducto">
            <img src={imagen} alt="Imagen del producto" />
            <div className="nombreYprecio">
            <h2>{nombre}</h2>
            <h3>AR${precio}</h3>
            </div>
        </div>
    )
}

export default Producto;