import React from "react";

export function getAllProductos(){

    let id = "Iphone";

    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${id}`).then(res=>res.json());
}