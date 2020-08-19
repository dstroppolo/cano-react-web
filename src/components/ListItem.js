import React from "react";
import './styles/ListItem.css';
import NumberFormat from 'react-number-format';

const ListItem = ({ item, row, onClick }) => {
	const { name, uuid, description, price, partner } = item;
	return (
		<tr className={row % 2 === 0? 'even': 'odd'} >
			<td><p>{name}</p></td>
			<td>{uuid}</td>
			<td>{description}</td>
			<td><NumberFormat value={price} fixedDecimalScale='true' decimalScale={2} prefix={'$'} displayType={'text'} /></td>
			<td>{partner}</td>
			<td><button onClick={onClick}>Remove</button></td>
		</tr>
	);
};

export default ListItem;
