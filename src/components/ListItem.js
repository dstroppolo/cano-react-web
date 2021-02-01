import React from "react";
import './styles/ListItem.css';

const formatPrice = price => {
  // This assumes that the price is never null. Fix if otherwise.
  return `$${price.toFixed(2)}`
}

const ListItem = ({ item, row, onClick }) => {
	const { name, uuid, description, price, partner } = item;
	const formattedPrice = formatPrice(price)
	// Whether row is odd or even. Used to style table with
	// alternating colors.
	const className = `row${row % 2}`
	return (
		<tr className={className}>
			<td><p>{name}</p></td>
      <td>{uuid}</td>
      <td>{description}</td>
      <td>{formattedPrice}</td>
      <td>{partner}</td>
      <td>
        <button onClick={onClick}>X</button>
      </td>
		</tr>
	);
};

export default ListItem;
