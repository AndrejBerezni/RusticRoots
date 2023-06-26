const initialState = {
  signedIn: false,
  user: {}
}

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN IN":
      return {
        isSignedIn: true,
        user: action.payload
      }
    case "SIGN OUT":
      return {
        isSignedIn: false,
        user: {}
      }
    default:
      return state;
  }
};

export default signInReducer;
