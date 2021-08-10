import { User } from './types'

export const SIGN_IN = 'SIGN_IN'

export const signinAction = (user: User) => {
  return {
    type: SIGN_IN,
    payload: {
      isLogin: true,
      info: { ...user },
    },
  }
}
