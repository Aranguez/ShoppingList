import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_LOADING } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading())
    fetch('/api/items')
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: GET_ITEMS,
                payload: res
            })}
    )
}

export const addItem = item => dispatch => {

    fetch('/api/items', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: ADD_ITEM,
                payload: res
            })
        })
        .catch(err => console.error(err))
    
}

export const deleteItem = id => dispatch => {
    fetch(`/api/items/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(res => {
        dispatch({
            type: DELETE_ITEM,
            id
        })
    })
    .catch(err => console.error(err))
}

export const setItemsLoading = () => {
    return {
        type: ITEM_LOADING,
    }
}