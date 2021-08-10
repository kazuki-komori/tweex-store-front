import { createSelector } from 'reselect'
import { UserState } from './types'
import { AppStates } from '../types'

const usersSelector = (state: AppStates) => state.user

export const getUser = createSelector([usersSelector], (state) => state.info)
