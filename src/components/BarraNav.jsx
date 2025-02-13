import React from "react";

function BarraNav(){

    return(
        <div>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="/register">Registro</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default BarraNav;