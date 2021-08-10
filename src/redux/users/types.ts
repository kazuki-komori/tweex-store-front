import { signinAction } from './actions'

export interface UserInfo {
  uid: string
  username: string
  displayName: string
}
export interface UserState {
  user: {
    isLogin: boolean
    info: UserInfo
  }
}

export type Actions = ReturnType<typeof signinAction>
