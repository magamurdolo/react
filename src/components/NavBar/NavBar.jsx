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
                <Button><Link to="/">Productos</Link></Button>
                <Button>Envíos</Button>
                <Button>Iniciar sesión</Button>
                <Button><Link to="/category/chico"> Chico</Link></Button>
                <Button><Link to="/category/mediano">Mediano</Link></Button>
                <Button><Link to="/category/grande">Grande</Link></Button>
                <CartWidget />
            </div>
        </>
    )
}

export default NavBar;