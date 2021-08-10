import { User } from './users/types'

export interface AppState {
  user: {
    isLogin: boolean
    info: User
  }
}
