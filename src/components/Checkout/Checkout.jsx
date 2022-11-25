import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

function Checkout() {
    return (
        <><h1>Gracias por tu compra!</h1>
            <Button><Link to="/">Volver al catálogo</Link></Button>
        </>
    )
}

export default Checkout;