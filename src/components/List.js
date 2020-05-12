import React, { useEffect } from "react";
import ListItem from "./ListItem";
import "./styles/List.css";
import FormContainer from "./FormContainer";

const List = ({ items, getItems, addItem, removeItem, data }) => {
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
		</>
	);
};

export default List;
