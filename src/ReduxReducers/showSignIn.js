// eslint-disable-next-line default-param-last
const showSignInReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW SIGN IN':
      return true
    case 'HIDE SIGN IN':
      return false
    default:
      return state
  }
}

export default showSignInReducer
