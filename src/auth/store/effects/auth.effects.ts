import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
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
        map(({ accessToken, idToken, expiresIn, idTokenPayload }: any) => {
          const expiry: number = expiresIn * 1000 + Date.now();
          return { accessToken, idToken, expiry, payload: idTokenPayload };
        }),
        exhaustMap(({ accessToken, idToken, expiry, payload }) => {
          return this.authService.getFullUserDetails(payload.sub).pipe(
            map((response: any) => {
              const githubAccessToken: string =
                response && response.identities && response.identities.length > 0 ? response.identities[0].access_token : null;
              this.authService.setAuth(accessToken, idToken, payload.sub, githubAccessToken, expiry);
              return new fromAuthActions.SigninSuccess();
            }),
            catchError(error => of(new fromAuthActions.SigninFailure(error)))
          );
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
    map(() => {
      if (this.authService.isAuthenticated) {
        return new fromAuthActions.SigninSuccess();
      } else {
        return new fromAuthActions.SigninFailure(`no authenticated user found`);
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
