import React, { useContext } from 'react';
import cartContext from '../../storage/CartContext';
import Button from '../Button/Button';

function CartView() {
    const { cart, removeItem, totalPriceInCart, clear } = useContext(cartContext);

    if (cart.length === 0) return <h1>Carrito vacío</h1>;

    return (
        <div>
            <h1>Mi carrito:</h1>

            {cart.map(cartItem => (
                <div key={cartItem.id}>
                    <img src={cartItem.img} alt={cartItem.title}/>
                    <h3>{cartItem.title}</h3>
                    <h4>{cartItem.price}</h4>
                    <h4>Cantidad: {cartItem.quantity}</h4>
                    <h4>Precio: {cartItem.quantity * cartItem.price}</h4>
                    <Button /*onClick= () => {removeItem(cartItem.id)}*/>X</Button>
                </div>
            ))}
            <Button /*onClick={clear}*/>Vaciar carrito</Button>
            <h2>Total a pagar: $ {totalPriceInCart()}</h2>
        </div>
    )
}

export default CartView