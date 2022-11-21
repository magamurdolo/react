import React, { useContext } from 'react';
import cartContext from '../../storage/CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function CartWidget() {
    const { totalItemsInCart } = useContext(cartContext);

    return (
        <Link to="/cart">
        <button className='btn'>
            <FontAwesomeIcon icon={faShoppingCart} />
            <small>{(totalItemsInCart() > 0) ?
                <span>{totalItemsInCart()}</span> : <></>}</small>
        </button>
        </Link>
    )
}

export default CartWidget;