import { auth, firestore, provider } from '@/utils/firebase'
import Router from 'next/router'
import { Dispatch } from 'redux'
import { signinAction } from './actions'
import { Actions, AppState, User } from './types'

export const siginIn = () => {
  return async (dispatch: Dispatch<Actions>, getState: () => AppState): Promise<void> => {
    const state = getState()
    if (!state.user.isLogin) {
      try {
        const res: any = await auth.signInWithPopup(provider)
        const user: User = {
          uid: res.user.uid,
          displayName: res.user.displayName,
          username: res.additionalUserInfo.username,
        }
        await firestore
          .collection('users')
          .doc(res.additionalUserInfo.username)
          .set({ ...user })

        dispatch(signinAction(user))
        Router.push('/mypage')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
