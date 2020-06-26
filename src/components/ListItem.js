import React from 'react';
import './styles/ListItem.css';

const ListItem = ({ item, row }) => {
  const { name, uuid, description, price, partner } = item;
  let fixPrice = price ? `$${parseInt(price).toFixed(2)}` : '';
  return (
    <tr>
      <td>
        <p>{name}</p>
      </td>
      <td>{uuid}</td>
      <td>{description}</td>
      <td>{fixPrice}</td>
      <td>{partner}</td>
    </tr>
  );
};

export default ListItem;
