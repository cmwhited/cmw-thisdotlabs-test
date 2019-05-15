import { Injectable } from '@angular/core';
import { Observable, of, bindNodeCallback } from 'rxjs';
import { Apollo } from 'apollo-angular';
import * as auth0 from 'auth0-js';

import { environment } from '@env/environment';

@Injectable()
export class AuthService {
  private readonly auth0Client = new auth0.WebAuth({
    clientID: environment.auth0.clientId,
    domain: environment.auth0.domain,
    responseType: environment.auth0.responseType,
    redirectUri: environment.auth0.callbackUrl,
    __tryLocalStorageFirst: true
  });
  // Create observable of Auth0 parseHash method to gather auth results
  readonly parseHash$ = bindNodeCallback(this.auth0Client.parseHash.bind(this.auth0Client));
  // Create observable of Auth0 checkSession method to
  // verify authorization server session and renew tokens
  readonly checkSession$ = bindNodeCallback(this.auth0Client.checkSession.bind(this.auth0Client));

  get accessToken(): string {
    return localStorage.getItem('ACCESS_TOKEN') || undefined;
  }

  get idToken(): string {
    return localStorage.getItem('ID_TOKEN') || undefined;
  }

  get expiresAt(): number {
    return localStorage.getItem('EXPIRY') ? parseInt(localStorage.getItem('EXPIRY'), 10) : undefined;
  }

  /**
   * check to see if their is an authenticated user by seeing if there is an access token and
   * comparing the the token expiry to the current time. if the current time is < the token expiry,
   * the token is still valid
   */
  get isAuthenticated(): boolean {
    return this.accessToken && Date.now() < this.expiresAt;
  }

  get logourUrl(): string {
    return environment.auth0.logoutUrl;
  }

  get successUrl(): string {
    return environment.auth0.successUrl;
  }

  constructor(private readonly apollo: Apollo) {}

  /**
   * check the local storage for the authentication items. if present, and not expired, user is authenticated
   */
  checkForAuth() {
    if (localStorage.getItem('ACCESS_TOKEN') && localStorage.getItem('ID_TOKEN') && localStorage.getItem('EXPIRY')) {
      const accessToken: string = localStorage.getItem('ACCESS_TOKEN');
      const idToken: string = localStorage.getItem('ID_TOKEN');
      const expiry: number = parseInt(localStorage.getItem('EXPIRY'), 10);
      this.setAuth(accessToken, idToken, expiry);
    }
  }

  /**
   * initiate the auth0 authorization flow
   */
  signin(): void {
    this.auth0Client.authorize();
  }

  /**
   * the user is logging out. reset the tokens & expiry, log out of the auth0 client
   */
  signout(): Observable<boolean> {
    this.removeAuth(); // reset tokens & expiry
    this.auth0Client.logout({
      returnTo: environment.auth0.externalLogoutUrl,
      clientID: environment.auth0.clientId
    });
    this.apollo.getClient().resetStore(); // reset apollo store now that logged out
    return of(true);
  }

  /**
   * Set the token & expiry values
   * @param accessToken the authenticated access token from auth0
   * @param idToken the authenticeted id token from auth0
   * @param expiry the timestamp of when the token expires
   */
  setAuth(accessToken: string, idToken: string, expiry: number) {
    // set tokens into localSorage.
    localStorage.setItem('ACCESS_TOKEN', accessToken);
    localStorage.setItem('ID_TOKEN', idToken);
    localStorage.setItem('EXPIRY', expiry.toString());
  }

  /**
   * reset the authentication values; effectively logging the user out
   */
  removeAuth(): void {
    // remove from local storage
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('ID_TOKEN');
    localStorage.removeItem('EXPIRY');
  }
}
