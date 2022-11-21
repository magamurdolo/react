import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./item.css";


function Item({product}) {
    
    const [isFavorite, setIsFavorite] = useState (false);
    
    function handleFavorite (){
        setIsFavorite(!isFavorite)
    };

    let classButtonFavorite = isFavorite === true? "card-favicon favorite" : "card-favicon";

    let urlDetail = `/detalle/${product.id}`

    return (
        <div className='card'>
            <button onClick={handleFavorite} className={classButtonFavorite}>♡</button>
            <div className='card-img'>
                <img src={product.img} alt="Imagen producto" />
            </div>
            <div className='card-detail'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.discount}</p>
                {product.discount && (
                    <h4 className='offer'>Descuento: {product.discount}% </h4>
                )}
                <h4 style={{color: product.discount? 'green' : 'inherit'}} className="priceTag">$ {product.price}</h4>
            </div>
            <Link to={urlDetail}><button className='btn'>Ver más</button></Link>
        </div>
    );
}

export default Item;