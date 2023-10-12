const showSpinner = () => {
  return {
    type: 'SHOW SPINNER',
  };
};

const hideSpinner = () => {
  return {
    type: 'HIDE SPINNER',
  };
};

export { showSpinner, hideSpinner };
