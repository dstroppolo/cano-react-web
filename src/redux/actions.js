import * as types from "./types";

export const getItems = () => ({
	type: types.GET_ITEMS,
});

export const setItems = (items) => ({
	type: types.SET_ITEMS,
	items,
});

export const addItem = (item) => ({
	type: types.ADD_ITEM,
	item,
});

export const removeItem = (uuid) => ({
	type: types.REMOVE_ITEM,
	uuid,
});

export const enterItemData = (data) => ({
  type: types.ENTER_ITEM_DATA,
  data,
})

