import { signinAction } from './actions'

export type User = {
  uid: string
  username: string
  displayName: string
}

export type Actions = ReturnType<typeof signinAction>

export interface AppState {
  user: {
    isLogin: boolean
    info: User
  }
}
