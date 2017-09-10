module.exports = function signIn (userInfo) {
  return {
    type: 'SIGN_IN',
    data: userInfo
  };
};

module.exports = function signOut () {
  return {
    type: 'SIGN_OUT',
    data: null
  };
};
