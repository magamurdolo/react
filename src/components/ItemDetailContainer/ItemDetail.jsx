import React, { useState, useContext } from 'react';
import ClickCounter from '../ClickCounter/ClickCounter';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import cartContext from '../../storage/CartContext';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { getQueriesForElement } from '@testing-library/react';

function ItemDetail({ product }) {
    const [isInCart, setIsInCart] = useState(false);
    const navigate = useNavigate();
    const {cart, addToCart} = useContext (cartContext);

    let itemInCart = cart.find (item => product.id === item.id);
    let stock = product.stock;
    if (itemInCart) stock -= itemInCart.quantity;
    

    function onAddToCart(quantity) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Producto ${product.title} agregado al carrito`,
            text: `Agregaste ${quantity} unidades.`,
            confirmButtonText: 'Ir al carrito',
            //timer: 2000
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/cart");
            }
        });

        const itemForCart = {
            ...product,
            quantity: quantity,

        }
        
        addToCart (itemForCart);

        setIsInCart(true);
    }

    return (
        <div className='cardItemDetail'>
            <div className='card-img'>
                <img src={product.img} alt="Imagen producto" />
            </div>
            <div className='card-detail'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3 className='priceTag'>$ {product.price}</h3>
            </div>
            {isInCart ? (
                <>
                    <Button><Link to="/">Volver al catálogo</Link></Button>
                </>
            ) : (
                <ClickCounter
                    onAddToCart={onAddToCart} 
                    stock={stock}/>
            )}
        </div>
    );
}

export default ItemDetail