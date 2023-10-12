const showSpinnerReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW SPINNER':
      return true;
    case 'HIDE SPINNER':
      return false;
    default:
      return state;
  }
};

export default showSpinnerReducer;
