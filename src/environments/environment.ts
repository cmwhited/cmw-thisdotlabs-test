// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvModel } from './env.model';

export const environment: EnvModel = {
  production: false,
  auth0: {
    clientId: 'MawBglFBIIVMqMWWZaRc9EZ053p2RVEn',
    domain: 'chriswhited.auth0.com',
    callbackUrl: 'http://localhost:4200/auth/callback',
    externalLogoutUrl: 'http://localhost:4200/auth/signin',
    logoutUrl: 'auth/signin',
    successUrl: 'github-user-search',
    responseType: 'token id_token'
  },
  githubGraphQLUrl: 'https://api.github.com/graphql'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
