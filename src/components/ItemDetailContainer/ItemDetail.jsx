import React, { useState } from 'react';
import ClickCounter from '../ClickCounter/ClickCounter';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function ItemDetail({ product }) {
    const [isInCart, setIsInCart] = useState(false);
    const navigate = useNavigate();

    function onAddToCart(cantidad) {
        //alert(`Agregaste ${cantidad} unidades de ${product.title} al carrito.`)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado al carrito',
            confirmButtonText: 'Ir al carrito',
            timer: 2000
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/cart");
            }
        });

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
                    <button>Ir al carrito</button>
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