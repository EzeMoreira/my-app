import React from "react";

function Registro(){

    return(
        <>
            <h1>Registrate para novedades</h1>
        <div>
            <form action="#" method="GET">
                <label>
                    Nombre completo:
                    <input type="text" name="name" required/>
                </label> <br />
                <label>
                    correo electronico
                    <input type="email" name="email" required/>
                </label> <br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
        </>
    );
}

export default Registro;