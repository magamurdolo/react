import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

function Error() {
    return (
        <>
        <h1>404: Página no encontrada</h1>
        <Button><Link to="/">Volver al catálogo</Link></Button>
        </>
    )
}

export default Error