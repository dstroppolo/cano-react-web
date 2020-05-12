import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import './styles/Form.css';

const Form = ({enterItemData, addItemSuccess}) => {
	const baseItem = {
		name: '',
		uuid: '',
		description: '',
		price: '',
		partner: '',
	};

	const [data, setData] = useState(baseItem);

	useEffect(() => {
		enterItemData(data);
	}, [data]);

	useEffect(() => {
		setData(baseItem);
	}, [addItemSuccess]);

	const _setData = (value) => {
		setData({ ...data, ...value });
	};
  
	return (
		<tr>
			<td><FormInput value={data.name} label='Name' name="name" onChange={_setData} /></td>
			<td><FormInput value={data.uuid} label='UUID' name="uuid" onChange={_setData} /></td>
			<td><FormInput value={data.description} label='Description' name="description" onChange={_setData} /></td>
			<td><FormInput value={data.price} label='Price' name="price" onChange={_setData} /></td>
			<td><FormInput value={data.partner} label='Partner' name="partner" s onChange={_setData} /></td>
		</tr>
	);
};

export default Form;
