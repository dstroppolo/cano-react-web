import React from "react";
import './styles/ListItem.css';

const ListItem = ({ item, row }) => {
	const { name, uuid, description, price, partner } = item;
	const className = "rowType" + row%2
	return (
		<tr className={className}>
			<td><p>{name}</p></td>
      <td>{uuid}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{partner}</td>
		</tr>
	);
};

export default ListItem;
