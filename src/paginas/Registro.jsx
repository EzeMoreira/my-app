import React from "react";

function Registro(){

    return(
        <>
            <h1 class="formulario">Registrate para novedades</h1>
        <div>
        <form action="#" method="GET">
                <label>
                    Nombre completo: <br/>
                    <input type="text" name="name" placeholder="Nombre Completo"required/>
                </label> <br/>
                <label> <br/>
                    correo electronico <br/>
                    <input type="email" name="email" placeholder="Correo electronico" required/>
                </label> <br/> 
                <label> <br/>
                    Password 
                    </label> <br/>
                    <input type="password" name="password" placeholder="password" required />
                    <br/> <br/>  
                <button type="submit" />
            </form>
        </div>
        </>
    );
}

export default Registro;