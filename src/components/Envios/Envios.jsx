import React from 'react';
import "./envios.css";

function Envios() {
    
    return (

    <div className='alturaMainEnvios'>
        <main className='mainEnvios'>
            <h2>Envíos</h2>
            <section>
                <p>Los pedidos se pueden pasar a buscar por M.B Gonnet, sin costo. <br /> También realizamos envíos a:
                    <ul>
                        <li className='list-style'>La Plata</li>
                        <li className='list-style'>Tolosa</li>
                        <li className='list-style'>Ringuelet</li>
                        <li className='list-style'>Gonnet</li>
                        <li className='list-style'>City Bell</li>
                        <li className='list-style'>Villa Elisa</li>
                    </ul> <br /> El valor del envío depende de la distancia. Otras zonas consultar. <br /><br />
                    Relizamos envíos a todo el país a través de Correo Argentino.
                </p>
            </section>
        </main>
    </div>
    )}

export default Envios;