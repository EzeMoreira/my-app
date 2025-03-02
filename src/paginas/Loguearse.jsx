import React from "react";

function Loguearse() {

    return(
        <>
        <h1 class="login">Loguearse</h1>
        <div>
            <form action="#" method="GET">
                <label> <br/>
                    correo electronico <br/>
                    <input type="email" name="email" required/>
                </label> <br/> 
                <label> <br/>
                    Password 
                    </label> <br/>
                    <input type="password" name="password" placeholder="password" required />
                    <br/>  <br/>
                    <button type="submit" />
            </form>
        </div>
        </>
    );
}

export default Loguearse;