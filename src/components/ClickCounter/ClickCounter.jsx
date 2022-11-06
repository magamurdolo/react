import React, { useState } from "react";
import "./clickCounter.css";

function ClickCounter(props) {

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

    function handleAddToCart() {
        console.log("Agregado al carrito.")
    }

    return (
        <div className="counterFlex">
            <button className='btn' onClick={handleDecrement}>-</button>
            <p>{cantidad}</p>
            <button className='btn' onClick={handleIncrement}>+</button>
            <br />
            <button className='btn' onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ClickCounter;