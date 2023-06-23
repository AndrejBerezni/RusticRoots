const signInReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN IN":
      return true;
    case "SIGN OUT":
      return false;
    default:
      return state;
  }
};

export default signInReducer;
