import React from 'react';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from '../Item/Item';

function ItemListContainer() {
  return (
    <>
    <h1>Bienvenidos!!</h1>
    <FlexWrapper>
        <Item title="Ankara" imgurl="/img/ankara.webp" price={100} detail="Té negro orgánico con jengibre, canela, cardamomo, clavo y anís."/>
        <Item title="Dublín" imgurl="/img/dublin.webp" price={100} detail="Té verde orgánico con jengibre, caléndula y limón."/>
        <Item title="Londres" imgurl="/img/londres.webp" price={100} detail="Té negro orgánico con aroma a vainilla y canela."/>
        <Item title="Moscú" imgurl="/img/moscu.webp" price={100} detail="Té negro orgánico con frutos rojos y rosa mosqueta."/>
        <Item title="Rabat" imgurl="/img/rabat.webp" price={100} detail="Té verde orgánico con boldo, cedrón y miel."/>
        <Item title="Varsovia" imgurl="/img/varsovia.webp" price={100} detail="Té negro orgánico con manzana, miel e hibiscus."/>
        <Item title="Wellington" imgurl="/img/wellington.webp" price={100} detail="Té negro orgánico con flores de jazmín y naranja."/>
    </FlexWrapper>
    </>
  )
}

export default ItemListContainer;