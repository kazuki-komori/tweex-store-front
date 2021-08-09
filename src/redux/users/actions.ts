export const SIGN_IN = 'SIGN_IN'

export const signinAction = () => {
  return {
    type: SIGN_IN,
    payload: {
      counter: 1,
    },
  }
}
