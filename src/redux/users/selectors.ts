import { createSelector } from 'reselect'
import { UserState } from './types'

const usersSelector = (state: UserState) => state.user

export const getUser = createSelector([usersSelector], (state) => state.info)
