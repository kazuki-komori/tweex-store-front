import { UsersReducer } from '@/redux/users/reducers'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { AppState } from './types'

// 永続化
const persistConfig = {
  key: 'root', // Storageに保存されるキー名を指定する
  storage, // 保存先としてlocalStorageがここで設定される
  whitelist: ['info'], // Stateは`info`のみStorageに保存する
}

// Redux 拡張機能
interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
declare var window: ExtendedWindow

const composeReduxDevToolsEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// store 作成
const createAppStore = () => {
  return createStore(
    persistReducer(
      persistConfig,
      combineReducers<AppState>({
        user: UsersReducer,
      })
    ),
    composeReduxDevToolsEnhancers(applyMiddleware(thunk))
  )
}

export const store = createAppStore()
export const persistor = persistStore(store)
