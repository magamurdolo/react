import React, { useState, useEffect } from 'react';
import { getSingleItemFromAPI } from '../mockService/mockService';
import ClickCounter from '../ClickCounter/ClickCounter';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    let {id} = useParams();

    useEffect(() => {
        getSingleItemFromAPI(id).then((itemsDB) => {
            setProduct(itemsDB);
        }).catch (error => alert (error));
    }, [id]);

    return (
            <div className='card'>
            <div className='card-img'>
                <img src={product.img} alt="Imagen producto" />
            </div>
            <div className='card-detail'>
                <h2>{product.title}</h2>
                <p>{product.detail}</p>
                <h3 className='priceTag'>$ {product.price}</h3>
            </div>
            <ClickCounter />
        </div>
    )
}
export default ItemDetailContainer;