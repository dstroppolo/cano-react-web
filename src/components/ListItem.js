import React from "react";
import './styles/ListItem.css';

const ListItem = ({ item, row, onRemoveClick }) => {
	const { name, uuid, description, price, partner } = item;
	const className = "rowType" + row%2
	return (
		<tr className={className}>
			<td><p>{name}</p></td>
      <td>{uuid}</td>
      <td>{description}</td>
      <td>${price.toFixed(2)}</td>
      <td>{partner}</td>
	  <td>
		  <button className="remove" onClick={onRemoveClick}>Remove</button>
	  </td>
		</tr>
	);
};

export default ListItem;
