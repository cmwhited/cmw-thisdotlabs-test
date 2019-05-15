import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Signin = '[Signin Page] Begin Signin Page flow',
  SigninComplete = '[Signin Page] Signin Flow Complete',
  SigninSuccess = '[Auth API] Signin Success',
  SigninFailure = '[Auth API] Signin Failure',
  CheckAuth = '[Auth] Checking to see if the user is already logged in from storage',
  Signout = '[Auth] Signing the user out',
  SignoutConfirmed = '[Auth] Signout Confiremd'
}

export class Signin implements Action {
  readonly type = AuthActionTypes.Signin;
}

export class SigninComplete implements Action {
  readonly type = AuthActionTypes.SigninComplete;
}

export class SigninSuccess implements Action {
  readonly type = AuthActionTypes.SigninSuccess;
}

export class SigninFailure implements Action {
  readonly type = AuthActionTypes.SigninFailure;

  public constructor(public payload: any) {}
}

export class CheckAuth implements Action {
  readonly type = AuthActionTypes.CheckAuth;
}

export class Signout implements Action {
  readonly type = AuthActionTypes.Signout;
}

export class SignoutConfirmed implements Action {
  readonly type = AuthActionTypes.SignoutConfirmed;
}

export type AuthActions = Signin | SigninComplete | SigninSuccess | SigninFailure | CheckAuth | Signout | SignoutConfirmed;
