import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../context';

const PageItemDetails = () => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const ItemData = useContext(AppContext).filter(item => item.id === id)[0];

  return (
    <div>
      <h1>{ItemData.id}</h1>
      <p>{ItemData.name}</p>
      <p>{ItemData.city}</p>
      <p>{ItemData.totalIncomes}</p>
    </div>
  );
};

export default PageItemDetails;
