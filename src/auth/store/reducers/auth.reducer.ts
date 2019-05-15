import * as fromAuthActions from '@auth/store/actions';

export interface State {
  isAuthenticated: boolean;
}

export const initialState: State = {
  isAuthenticated: false
};

export function reducer(state: State = initialState, action: fromAuthActions.AuthActions): State {
  switch (action.type) {
    case fromAuthActions.AuthActionTypes.SigninSuccess: {
      return {
        ...state,
        isAuthenticated: true
      };
    }
    case fromAuthActions.AuthActionTypes.SignoutConfirmed: {
      return initialState;
    }
    default:
      return state;
  }
}

export const getIsAuthenticated = (state: State) => state.isAuthenticated;
