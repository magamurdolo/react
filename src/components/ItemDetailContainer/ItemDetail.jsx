import React, { useState, useContext } from 'react';
import ClickCounter from '../ClickCounter/ClickCounter';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import cartContext from '../../storage/CartContext';
import { Link } from 'react-router-dom';

function ItemDetail({ product }) {
    const [isInCart, setIsInCart] = useState(false);
    const navigate = useNavigate();
    const {addToCart} = useContext (cartContext);

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
        <div className='card'>
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
                <Link to="/cart">
                    <button>Ir al carrito</button>
                    </Link>
                    <button>Volver al catálogo</button>
                    <button>Quitar del carrito</button>
                </>
            ) : (
                <ClickCounter
                    onAddToCart={onAddToCart} 
                    stock={product.stock}/>
            )}
        </div>
    );
}

export default ItemDetail