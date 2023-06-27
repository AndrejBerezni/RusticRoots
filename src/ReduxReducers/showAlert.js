const initialState = {
  showAlert: false,
  message: "",
};

const showAlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW ALERT":
      return {
        showAlert: true,
        message: action.payload,
      };
    case "HIDE ALERT":
      return {
        showAlert: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default showAlertReducer;
