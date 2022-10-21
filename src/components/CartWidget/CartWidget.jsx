import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    return (
        <button className='btn'>
            Carrito <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    )
}

export default CartWidget;