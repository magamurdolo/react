import React, { useState, useEffect } from 'react';
import { getSingleItemFromAPI } from '../mockService/mockService';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let id = useParams().id;

    useEffect(() => {
        getSingleItemFromAPI(id).then((itemsDB) => {
            setProduct(itemsDB);
        }).catch((error) => {
            console.log(error)
        })
        .finally ( ()=> 
        setIsLoading(false))
    }, [id]);

    if (isLoading) return <Loader/>;

    return <ItemDetail product={product} />;
}
export default ItemDetailContainer;