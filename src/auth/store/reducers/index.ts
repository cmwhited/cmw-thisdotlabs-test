import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromAuthReducer from './auth.reducer';

export interface AuthState {
  auth: fromAuthReducer.State;
}

export const reducers: ActionReducerMap<AuthState> = {
  auth: fromAuthReducer.reducer
};

export const selectAuthState = createFeatureSelector<AuthState>('AUTH');
