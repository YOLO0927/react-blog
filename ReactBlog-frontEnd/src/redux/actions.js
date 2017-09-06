export function signIn (userInfo) {
  return {
    type: 'SIGN_IN',
    data: userInfo
  }
}

export function signOut () {
  return {
    type: 'SIGN_OUT',
    data: null
  }
}
