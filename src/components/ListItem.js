import React from "react";
import './styles/ListItem.css';

const formatCurrency = (n, currency = '$') => {
	return currency + n.toFixed(2);
}

const ListItem = ({ item, row, onClick }) => {
	const { name, uuid, description, price, partner } = item;

	return (
		<tr className="row">
			<td><p>{name}</p></td>
			<td>{uuid}</td>
			<td>{description}</td>
			<td>{formatCurrency(price)}</td>
			<td>{partner}</td>
			<td><button onClick={() => onClick()}>remove</button></td>
		</tr>
	);
};

export default ListItem;
