import React from "react";
import './styles/ListItem.css';

const ListItem = ({ item, row }) => {
	const { name, uuid, description, price, partner } = item;
	function classNames() {
		if(row % 2 == 0)
		{
			return "evenClassName";
		}

		else
		{
			return "oddClassName";
		}
	}
	return (
		<tr>
			<td className={classNames()}><p>{name}</p></td>
			<td className={classNames()}>{uuid}</td>
			<td className={classNames()}>{description}</td>
			<td className={classNames()}>{price}</td>
			<td className={classNames()}>{partner}</td>
		</tr>
	);


};

export default ListItem;
