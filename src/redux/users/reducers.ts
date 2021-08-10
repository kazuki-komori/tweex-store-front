import * as Actions from '@/redux/users/actions'
import { intialState } from '@/redux/users/index'
import * as types from '@/redux/users/types'

export const UsersReducer = (state = intialState, action: types.Actions) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.user.payload,
      }
    default:
      return state
  }
}
