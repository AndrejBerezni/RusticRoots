const initialState = {
  showAlert: false,
  message: '',
}

// eslint-disable-next-line default-param-last
const showSignInAlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW SIGN IN ALERT':
      return {
        showAlert: true,
        message: action.payload,
      }
    case 'HIDE SIGN IN ALERT':
      return {
        showAlert: false,
        message: action.payload,
      }
    default:
      return state
  }
}

export default showSignInAlertReducer
