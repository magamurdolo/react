import React from 'react';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import "./navBar.css";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Link to="/"><h3>Tea Blends</h3></Link>
            <div className='buttonFlex'>
                <Button><Link to="/">Productos</Link></Button>
                <Button><Link to="/category/chico"> Chico</Link></Button>
                <Button><Link to="/category/mediano">Mediano</Link></Button>
                <Button><Link to="/category/grande">Grande</Link></Button>
                <Button><Link to="/iniciarSesion">Iniciar sesión</Link></Button>
                <Button><Link to="/envios">Envíos</Link></Button>
                <CartWidget />
            </div>
        </>
    )
}

export default NavBar;