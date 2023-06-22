const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD ITEM":
      // Check if item is already added
      const index = state.findIndex(
        (object) => object.name === action.payload.name
      );
      //   If it is, just increase the count
      if (index > -1) {
        const updatedState = [...state];
        updatedState[index].count += action.payload.count;
        return updatedState;
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  }
};

export default cartReducer;
