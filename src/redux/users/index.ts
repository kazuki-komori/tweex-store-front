import { UserInfo } from './types'
// localStorage から取り出し
let info: UserInfo = {
  uid: '',
  username: '',
  displayName: '',
}

export const intialState = {
  isLogin: false,
  info,
}
