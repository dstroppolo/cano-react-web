import React, { useEffect } from "react";
import ListItem from "./ListItem";
import "./styles/List.css";
import FormContainer from "./FormContainer";

const List = ({ items, data, getItems, addItem, removeItem }) => {
	useEffect(() => {
		getItems();
	}, []);

	const renderHeaderTitles = () => {
		//get the column names
		const sampleItem = items[0];
		return Object.keys(sampleItem).map((key) => {
			return <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>;
		});
	};

	const renderListItems = () => {
		console.log(items)
		return items.map((item, i) => {
			
			return <ListItem key={item.uuid} item={item} row={i} />;
		});
	};

	return (
		<>
			<div className={`list-container`}>
				<table>
					<thead>
						<tr>{renderHeaderTitles()}</tr>
					</thead>
					<tbody>
						{renderListItems()}
						<FormContainer />
					</tbody>
				</table>
			</div>
			<button onClick={() => addItem(data)}>Add Item</button>
			<button onClick={() => removeItem(items.uuid)}>Remove Item</button>
		</>
	);
};

export default List;
