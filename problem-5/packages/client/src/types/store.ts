/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Action, ThunkAction } from '@reduxjs/toolkit'
import { store } from '../state'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
