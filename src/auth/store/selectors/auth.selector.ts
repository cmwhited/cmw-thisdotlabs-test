import { createSelector } from '@ngrx/store';

import { selectAuthState, AuthState } from '@auth/store/reducers';
import { getIsAuthenticated } from '@auth/store/reducers/auth.reducer';

const selectAuthAuthState = createSelector(
  selectAuthState,
  (state: AuthState) => state.auth
);

export const selectAuthenticated = createSelector(
  selectAuthAuthState,
  getIsAuthenticated
);
