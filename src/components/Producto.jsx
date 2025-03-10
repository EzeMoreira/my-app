import React from "react";

function Producto({id, imagen, nombre, precio}){

    return(
        <div>
            <img src={imagen} alt="Imagen del producto" />
            <h2>{nombre}</h2>
            <h3>AR${precio}</h3>
        </div>
    )
}

export default Producto;