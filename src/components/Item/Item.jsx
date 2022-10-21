import React from 'react';
import "./item.css";

function Item(props) {
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={props.imgurl} alt="Imagen producto" />

            </div>
            <div className='card-detail'>
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
                <h3 className='priceTag'>$ {props.price}</h3>
            </div>
            <button className='btn'>Comprar</button>


        </div>
    );
}

export default Item;