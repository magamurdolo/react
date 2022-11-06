import React from 'react'
import Item from '../Item/Item';
import FlexWrapper from '../FlexWrapper/FlexWrapper';

function ItemList(props) {
    return (
        <div>
            <FlexWrapper>
                {props.productsList.map((product) => (
                        <Item
                            key={product.id}
                            title={product.title}
                            detail={product.description}
                            price={product.price}
                            imgurl={product.img}
                            stock={product.stock}
                            product={product}
                        />
                    ))
                }
            </FlexWrapper>
        </div>
    )
}

export default ItemList