import React from "react";
import './styles/ListItem.css';

const ListItem = ({ item, row }) => {
	const { name, uuid, description, price, partner } = item;
	// Whether row is odd or even. Used to style table with
	// alternating colors.
	const className = `row${row % 2}`
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
