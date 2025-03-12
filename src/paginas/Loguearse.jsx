import React from "react";


function Loguearse() {

    return(
        <>
        <h1>Login</h1>
            <div className="registro">
            <form action="#" method="GET">
                    <label>
                        Email:
                    </label><br />
                    <input type="email" name="email" required placeholder="email"/><br />
                    <label> <br />
                        Password:
                    </label><br />
                    <input type="password" name="password" placeholder="password" required />
                    <br /> <br />
                    <button type="submit" id="botonComprar" >Enviar</button><br />
                </form>
        </div>
        </>
    );
}

export default Loguearse;