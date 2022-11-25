import React, { useContext } from 'react';
import { createBuyOrderFirestoreWithStock } from '../../services/firebase';
import cartContext from '../../storage/CartContext';
import Button from '../Button/Button';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import "./cartView.css";
import BuyForm from "./BuyForm";

function CartView() {
    const { cart, removeItem, totalPriceInCart, clear } = useContext(cartContext);
    const navigate = useNavigate();

    if (cart.length === 0)
        return <>
            <h1>Carrito vacío</h1>
            <Button><Link to="/">
                Volver al catálogo
            </Link></Button>
        </>

    function createBuyOrder(userData) {
        const buyData = {
            buyer: userData,
            items: cart,
            total: totalPriceInCart(),
            date: new Date(),
        };

        createBuyOrderFirestoreWithStock(buyData).then((orderId) => {
            clear();
            navigate(`/checkout/${orderId}`);

            Swal.fire({
                title: `Gracias por tu compra!`,
                text: `El identificador de tu compra es: ${orderId}`,
                icon: "success",
            });
        });
    }

    return (
        <div>
            <h1>Mi carrito:</h1>

            {cart.map((cartItem) => (
                <div className='productInCart' key={cartItem.id}>
                    <img src={cartItem.img} alt={cartItem.title} className='imgInCart' />
                    <h3>{cartItem.title}</h3>
                    <h4>$ {cartItem.price}</h4>
                    <h4>Cantidad: {cartItem.quantity}</h4>
                    <h4>Precio: $ {cartItem.quantity * cartItem.price}</h4>
                    <Button onClick={() => removeItem(cartItem.id)}>X</Button>
                    <br /><br />
                </div>
            ))}

            <Button onClick={clear}>Vaciar carrito</Button>
            <Button><Link to="/">Seguir comprando</Link></Button>
            <h2>Total a pagar: $ {totalPriceInCart()}</h2>

            <BuyForm onSubmit={createBuyOrder} />
        </div>
    );
}

export default CartView;