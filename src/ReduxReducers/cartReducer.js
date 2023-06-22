const initialState = [];

const cartReducer = (state = initialState, action) => {
  let index;
  switch (action.type) {
    case "ADD ITEM":
      // Check if item is already added
      index = state.findIndex((object) => object.name === action.payload.name);
      //   If it is, just increase the count
      if (index > -1) {
        const updatedState = [...state];
        updatedState[index].count += action.payload.count;
        return updatedState;
      } else {
        return [...state, action.payload];
      }
    case "INCREMENT ITEM NUMBER":
      index = state.findIndex((object) => object.name === action.payload.name);
      if (index > -1) {
        const updatedState = [...state];
        updatedState[index].count++;
        return updatedState;
      }
      return state;
    case "DECREMENT ITEM NUMBER":
      index = state.findIndex((object) => object.name === action.payload.name);
      if (index > -1 && state[index].count > 1) {
        const updatedState = [...state];
        updatedState[index].count--;
        return updatedState;
      }
      return state;
    case "REMOVE ITEM":
      index = state.findIndex((object) => object.name === action.payload.name);
      if (index > -1) {
        state.splice(index, 1);
      }
      return [...state];
    default:
      return state;
  }
};

export default cartReducer;
