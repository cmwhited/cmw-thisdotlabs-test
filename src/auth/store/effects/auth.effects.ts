import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, empty } from 'rxjs';
import { tap, exhaustMap, map, catchError } from 'rxjs/operators';

import { AuthService } from '@auth/services';
import * as fromAuthActions from '@auth/store/actions';

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  signin$ = this.actions$.pipe(
    ofType<fromAuthActions.Signin>(fromAuthActions.AuthActionTypes.Signin),
    tap(() => {
      this.authService.signin();
    })
  );

  @Effect()
  signinComplete$ = this.actions$.pipe(
    ofType<fromAuthActions.SigninComplete>(fromAuthActions.AuthActionTypes.SigninComplete),
    exhaustMap(() => {
      return this.authService.parseHash$().pipe(
        map((result: any) => {
          if (result && result.accessToken && result.idToken) {
            const expiry: number = result.expiresIn * 1000 + Date.now();
            this.authService.setAuth(result.accessToken, result.idToken, expiry);
            return new fromAuthActions.SigninSuccess();
          }
        }),
        catchError(error => {
          this.authService.removeAuth();
          return of(new fromAuthActions.SigninFailure(error));
        })
      );
    })
  );

  @Effect({ dispatch: false })
  signinRedirect$ = this.actions$.pipe(
    ofType<fromAuthActions.SigninSuccess>(fromAuthActions.AuthActionTypes.SigninSuccess),
    tap(() => {
      this.router.navigate([this.authService.successUrl]);
    })
  );

  @Effect()
  checkAuth$ = this.actions$.pipe(
    ofType<fromAuthActions.CheckAuth>(fromAuthActions.AuthActionTypes.CheckAuth),
    exhaustMap(() => {
      if (this.authService.isAuthenticated) {
        return this.authService.checkSession$({}).pipe(
          map((result: any) => {
            if (result && result.accessToken && result.idToken) {
              const expiry: number = result.expiresIn * 1000 + Date.now();
              this.authService.setAuth(result.accessToken, result.idToken, expiry);
              window.location.hash = ''; // reset current location
              return new fromAuthActions.SigninSuccess();
            }
          }),
          catchError(error => {
            this.authService.removeAuth();
            return of(new fromAuthActions.SigninFailure(error));
          })
        );
      } else {
        return empty();
      }
    })
  );

  @Effect({ dispatch: false })
  signoutConfirmation$ = this.actions$.pipe(
    ofType<fromAuthActions.Signout>(fromAuthActions.AuthActionTypes.Signout),
    tap(() => this.authService.signout())
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}
}
