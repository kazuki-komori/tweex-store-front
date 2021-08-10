import { UserInfo } from './types'

export const SIGN_IN = 'SIGN_IN'

export const signinAction = (user: UserInfo) => {
  return {
    type: SIGN_IN,
    user: {
      payload: {
        isLogin: true,
        info: { ...user },
      },
    },
  }
}
