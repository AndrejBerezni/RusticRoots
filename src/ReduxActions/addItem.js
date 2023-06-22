const addItem = (item) => {
    return {
        type: 'ADD ITEM',
        payload: item
    }
}

export {addItem}