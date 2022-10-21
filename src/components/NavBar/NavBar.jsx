import React from 'react';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import "./navBar.css";

function NavBar() {
    return (
        <>
            <h3>Tea Blends</h3>
            <h4>Té orgánico en hebras</h4>
            <Button text="Productos" />
            <Button text="Envíos" />
            <Button text="Iniciar sesión" />
            <CartWidget/>
        </>

    )
}

export default NavBar;