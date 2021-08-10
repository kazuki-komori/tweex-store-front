import { signinAction } from './actions'

export type User = {
  uid: string
  username: string
  displayName: string
}

export type Actions = ReturnType<typeof signinAction>