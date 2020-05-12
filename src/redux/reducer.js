import * as types from "./types";
import itemList from "../items";

const initialState = { items: itemList };

export default function items(state = initialState, action) {
	switch (action.type) {
		case types.GET_ITEMS:
			return {
				...state,
			};
		case types.ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.item],
				data: {},
				addItemSuccess: true,
			}
		case types.ENTER_ITEM_DATA:
			return {
				...state,
				data: action.data,
				addItemSuccess: false,
			};
		case types.REMOVE_ITEM:
			let filteredItems = [...state.items.filter((value) => value.uuid !== action.uuid)];

			return {
				...state,
				items: [...filteredItems],
				data: {},
			}
		default:
			return state;
	}
}
