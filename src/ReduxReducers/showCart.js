// eslint-disable-next-line default-param-last
const showCartReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW CART':
      return true;
    case 'HIDE CART':
      return false;
    default:
      return state;
  }
};

export default showCartReducer;
