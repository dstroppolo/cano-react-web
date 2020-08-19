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
			if (Object.keys(action.item).find(key => action.item[key] === '') === undefined) {
				if (state.items.find(item => item.uuid === action.item.uuid) === undefined) {
					return {
						...state,
						items: [...state.items, action.item],
						data: {},
						addItemSuccess: true,
					}
				}
			}

			return {
				...state,
				addItemSuccess: false,
			}
		case types.ENTER_ITEM_DATA:
			return {
				...state,
				data: action.data,
				addItemSuccess: false,
			};
		case types.REMOVE_ITEM:
			return {
				...state,
				items: state.items.filter(item => item.uuid !== action.uuid )
			}
		default:
			return state;
	}
}
