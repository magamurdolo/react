import React, { useState } from "react";
import "./clickCounter.css";
import Button from '../Button/Button'; 

function ClickCounter(props, onAddToCart) {

    const [cantidad, setCantidad] = useState(1);
    let stock = 50

    function handleIncrement() {
        if (cantidad < stock){
        setCantidad(cantidad + 1);
        }
    }

    function handleDecrement() {
        if (cantidad > 1) {
        setCantidad(cantidad - 1);
        }
    }

    return (
        <div className="counterFlex">
            <Button className='btn' onClick={handleDecrement}>-</Button>
            <p>{cantidad}</p>
            <Button className='btn' onClick={handleIncrement}>+</Button>
            <br />
            <Button className='btn' onClick={()=>onAddToCart(cantidad)}>Agregar al carrito</Button>
        </div>
    )
}

export default ClickCounter;