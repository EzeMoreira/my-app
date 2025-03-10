import React from "react";

function Loguearse() {

    return(
        <>
        <h1 class="login">Loguearse</h1>
        <div>
            <form action="#" method="GET">
                <label> <br/>
                    Correo electronico <br/>
                    <input type="email" name="email" placeholder="Correo electronico" required/>
                </label> <br/> 
                <label> <br/>
                    Password 
                    </label> <br/>
                    <input type="password" name="password" placeholder="password" required />
                    <br/>  <br/>
                    <button id="botonComprar" type="submit">Enviar</button>
            </form>
        </div>
        </>
    );
}

export default Loguearse;