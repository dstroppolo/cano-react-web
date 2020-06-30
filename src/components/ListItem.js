import React from "react";
import "./styles/ListItem.css";

const ListItem = ({ item, row, removeItem }) => {
  const { name, uuid, description, price, partner } = item;
  return (
    <tr>
      <td>
        <p>{name}</p>
      </td>
      <td>{uuid}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{partner}</td>
      <td>
        <button onClick={() => removeItem(uuid)}>remove</button>
      </td>
    </tr>
  );
};

export default ListItem;
