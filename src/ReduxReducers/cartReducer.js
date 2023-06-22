const initialState = []

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD ITEM":
            return [...state, action.payload];
        default:
            return state
    }
}

export default cartReducer