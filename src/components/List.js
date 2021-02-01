import React, { useEffect } from "react";
import ListItem from "./ListItem";
import "./styles/List.css";
import FormContainer from "./FormContainer";
import {getItemsAsync} from '../items';


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
			return <ListItem key={item.uuid} item={item} row={i} onClick={() => removeItem(item.uuid)} />;
		});
	};

	const loadListItems = async () => {
		const asyncItems = await getItemsAsync();
		setItems(asyncItems);
	}

	const handleAddItem = () => {
	  // Check no fields are empty
	  if (Object.values(data).some(item => item === "")) {
	    // Return silently and log for now
	    console.log("Empty data values")
	    return
	  }
	  const existingUuids = items.map(item => item.uuid)
	  if (existingUuids.includes(data.uuid)) {
	    // Return silently and log for now
	    console.log("Duplicate UUID")
	    return
	  }

	  // If checks pass, dispatch action
	  // Convert price to number since we expect numbers. This is consistent
	  // with the items in the initial state
	  addItem({...data, price: Number(data.price)})
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
			<button className='add' onClick={() => handleAddItem()}>Add Item</button>

			<button className='reset' onClick={() => loadListItems()}>Reset original items</button>

		</>
	);
};

export default List;
