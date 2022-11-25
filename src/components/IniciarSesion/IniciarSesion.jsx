import React from 'react';
import "./iniciarSesion.css";

function IniciarSesion() {
    return (
        <div className='formCentrar'>
            <h3>Iniciar sesión</h3>
            <form action="#" method="POST" className="formDesign">
                <input type="email" placeholder="Usuario"/>
                <input type="password" placeholder="Contraseña"/>
                <input type="submit"/>
            </form>
        </div>
        )
                    
}

export default IniciarSesion;