export interface EnvModel {
  production: boolean;
  auth0: {
    clientId: string;
    domain: string;
    callbackUrl: string;
    externalLogoutUrl: string;
    logoutUrl: string;
    successUrl: string;
    responseType: string;
  };
  githubGraphQLUrl: string;
}
