import { createSelector } from 'reselect'

const usersSelector = (state: any) => state.users

export const getCounter = createSelector([usersSelector], (state) => state.counter)
