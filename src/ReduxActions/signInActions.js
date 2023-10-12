const signIn = (user) => {
  return {
    type: 'SIGN IN',
    payload: user,
  };
};

const signOut = () => {
  return {
    type: 'SIGN OUT',
  };
};

export { signIn, signOut };
