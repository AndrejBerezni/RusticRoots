const showSignInAlert = (alertText) => {
  return {
    type: 'SHOW SIGN IN ALERT',
    payload: alertText,
  };
};

const hideSignInAlert = () => {
  return {
    type: 'HIDE SIGN IN ALERT',
  };
};

const showAlert = (alertText) => {
  return {
    type: 'SHOW ALERT',
    payload: alertText,
  };
};

const hideAlert = () => {
  return {
    type: 'HIDE ALERT',
  };
};

export { showAlert, hideAlert, showSignInAlert, hideSignInAlert };
