import React from 'react'
import Item from '../Item/Item';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Loader from '../Loader/Loader';

function ItemList(props) {
    let emptyArray = props.productsList.length === 0;
    return (
        <div>
            <FlexWrapper>
                {emptyArray ?
                    props.feedbackMsg ?
                        <span style={{ backgroundColor: "pink" }}> {props.feedbackMsg}</span>
                        :
                        <Loader />
                    : (
                        props.productsList.map((product) => (
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
                    )};
            </FlexWrapper>
        </div>
    )
}

export default ItemList