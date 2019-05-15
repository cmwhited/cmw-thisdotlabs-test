import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { mergeMap, map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AuthService } from '@auth/services';
import * as fromAuthStore from '@auth/store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly authStore: Store<fromAuthStore.AuthState>,
    private readonly router: Router
  ) {}

  /**
   * Only if the user is authenticated can we allow access to the next state (i.e. the route being accessed).
   * Check the auth store to see if the user is authenticated. If the auth store is showing they are authenticated,
   * return true; let the user through; otherwise check the api.
   * If the user is not authenticated, route to the app login page.
   */
  canActivate(): Observable<boolean> {
    return this.checkStoreAuthentication().pipe(
      mergeMap((storeAuthenticatedValue: boolean) => {
        if (storeAuthenticatedValue) {
          return of(true);
        }
        return this.checkApiAuthentication();
      }),
      map((authenticated: boolean) => {
        if (!authenticated) {
          this.router.navigate([this.authService.logourUrl]);
          return false;
        }
        // user is authenticated
        return true;
      })
    );
  }

  private checkStoreAuthentication(): Observable<boolean> {
    return this.authStore.select(fromAuthStore.selectAuthenticated).pipe(take(1));
  }

  private checkApiAuthentication(): Observable<boolean> {
    return of(this.authService.isAuthenticated);
  }
}
