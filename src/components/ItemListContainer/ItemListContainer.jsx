import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getItemsFromAPI, getItemsFromAPIByCategory } from '../../services/firebase';
import { useParams } from 'react-router-dom';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Loader from '../Loader/Loader';

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const { categoryid } = useParams();
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid).then((itemsDB) => {
        setProductsList(itemsDB);
      })
        .catch(error => {
          setFeedbackMsg(error.message)
        })
        .finally( ()=> setIsLoading (false))
    } else {
      getItemsFromAPI().then((itemsDB) => {
        setProductsList(itemsDB);
      })
      .finally( ()=> setIsLoading (false))
    }
  }, [categoryid]);

  if (isLoading)
  return (
    <FlexWrapper>
      <Loader/>
    </FlexWrapper>
  );

  return (
    <>
      <h1>Té orgánico en hebras</h1>
      <ItemList feedbackMsg={feedbackMsg} productsList={productsList} />
    </>
  )
}

export default ItemListContainer;