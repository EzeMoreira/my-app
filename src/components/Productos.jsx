import React, { useState, useEffect} from "react";
import { getAllProductos } from "../servicios/ProductoServicio";

function Productos(){
    
    const [Productos, setProductos] = useState();

    useEffect(() => {
        const request = async () => {
            try {
                const querySnapshot = await getAllProductos();
                console.log(querySnapshot.docs);
                setProductos(querySnapshot.docs);
        }   catch (e) {
            console.log(e);
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