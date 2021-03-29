import React, { useEffect } from "react";
import ListItem from "./ListItem";
import "./styles/List.css";
import FormContainer from "./FormContainer";
import {getItemsAsync} from '../items';


const isAnyAttributeEmpty = (obj) => {
	for (let key in obj) {
		if (obj[key] == null || obj[key] == "") {
			return true;
		}
	}
	return false;
}

const List = ({ items, data, getItems, setItems, addItem, removeItem }) => {
	
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
			return <ListItem key={item.uuid} item={item} row={i} onRemoveClick={() => removeItem(item.uuid)} />;
		});
	};

	const loadListItems = async () => {
		const asyncItems = await getItemsAsync();
		setItems(asyncItems);
	}

	const handleAddItem = (data) => {
		if (isAnyAttributeEmpty(data)) {
			alert("Cannot add an item with empty values!");
			return;
		}

		const currentUUIDs = items.map(item => item.uuid);
		if (currentUUIDs.includes(data.uuid)) {
			// we have a duplicate
			alert("Cannot add an item with a duplicate UUID!");
			return;
		}

		// convert the price to a Number to avoid throwing an error later on `.toFixed()`
		// although this will result in NaN if it's not convertible...
		const formattedData = {...data, price: Number(data.price)}
		return addItem(formattedData);
	}

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
			<button className='add' onClick={() => handleAddItem(data)}>Add Item</button>

			<button className='reset' onClick={() => loadListItems()}>Reset original items</button>
		</>
	);
};

export default List;
