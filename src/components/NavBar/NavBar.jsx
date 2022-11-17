import React from 'react';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import "./navBar.css";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Link to="/"><h3>Tea Blends</h3></Link>
            <h4>Té orgánico en hebras</h4>
            <div className='buttonFlex'>
                <Button>Productos</Button>
                <Button>Envíos</Button>
                <Button>Iniciar sesión</Button>
                <button className='btn'> <Link to="/category/chico">Chico</Link></button>
                <button className='btn'> <Link to="/category/mediano">Mediano</Link></button>
                <button className='btn'> <Link to="/category/grande">Grande</Link></button>
                <CartWidget />
            </div>
        </>
    )
}

export default NavBar;