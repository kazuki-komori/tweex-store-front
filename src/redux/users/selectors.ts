import { createSelector } from 'reselect'

const usersSelector = (state: any) => state.user

export const getUser = createSelector([usersSelector], (state) => state.info)
