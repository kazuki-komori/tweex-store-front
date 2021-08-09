import * as Actions from '@/redux/users/actions'
import { intialState } from '@/redux/users/index'

export const UsersReducer = (state = intialState.user, action: any) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        counter: state.counter + action.payload.counter,
      }
    default:
      return state
  }
}
