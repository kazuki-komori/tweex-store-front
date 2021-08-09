import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { UsersReducer } from './reducers'

export const intialState = {
  user: {
    counter: 0,
  },
}

// Redux 拡張機能
interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
declare var window: ExtendedWindow

const composeReduxDevToolsEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const createUsersStore = () => {
  return createStore(
    combineReducers({
      users: UsersReducer,
    }),
    composeReduxDevToolsEnhancers(applyMiddleware())
  )
}
