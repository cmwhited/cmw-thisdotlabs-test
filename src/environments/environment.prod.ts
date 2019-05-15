import { EnvModel } from './env.model';

export const environment: EnvModel = {
  production: true,
  auth0: {
    clientId: 'MawBglFBIIVMqMWWZaRc9EZ053p2RVEn',
    domain: 'chriswhited.auth0.com',
    callbackUrl: 'https://cmw-thisdotlabs-test.chriswhited.io/auth/callback',
    externalLogoutUrl: 'https://cmw-thisdotlabs-test.c/auth/signin',
    logoutUrl: '/auth/signin',
    successUrl: '/github-user-search',
    responseType: 'token id_token'
  },
  githubGraphQLUrl: 'https://api.github.com/graphql'
};
