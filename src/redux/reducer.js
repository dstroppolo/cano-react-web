import * as types from "./types";
import {itemList} from "../items";

const initialState = { items: itemList };

export default function items(state = initialState, action) {
	switch (action.type) {
		case types.GET_ITEMS:
			return {
				...state,
			};
		case types.SET_ITEMS: 
			return {
				...state,
				items: action.items,
			}
		case types.ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.item],
				data: {},
				addItemSuccess: true,
			}
	    case types.REMOVE_ITEM:
			return {
				...state,
				items: state.items.filter(item => item.uuid !== action.uuid),
			}
		case types.ENTER_ITEM_DATA:
			return {
				...state,
				data: action.data,
				addItemSuccess: false,
			};
		default:
			return state;
	}
}
