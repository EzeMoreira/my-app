import React from "react";

function Registro(){

    return(
        <>
            <h1 class="formulario">Registrate para novedades</h1>
        <div>
            <form action="#" method="GET">
                <label>
                    Nombre completo: <br/>
                    <input type="text" name="name" required/>
                </label> <br/>
                <label> <br/>
                    correo electronico <br/>
                    <input type="email" name="email" required/>
                </label> <br/> <br/> 
                <input type="submit" value="Submit"/>
            </form>
        </div>
        </>
    );
}

export default Registro;