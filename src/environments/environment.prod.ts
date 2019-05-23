import { EnvModel } from './env.model';

export const environment: EnvModel = {
  production: true,
  auth0: {
    clientId: 'MawBglFBIIVMqMWWZaRc9EZ053p2RVEn',
    domain: 'chriswhited.auth0.com',
    callbackUrl: 'https://cmw-thisdotlabs-test.chriswhited.io/auth/callback',
    externalLogoutUrl: 'https://cmw-thisdotlabs-test.chriswhited.io/auth/signin',
    logoutUrl: '/auth/signin',
    successUrl: '/github-user-search',
    responseType: 'token id_token',
    mgmtToken:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6RTJPRFpGUkRoR1FUa3pNa00yTWpFek5qWkdOVVZCT1RRMU5UTXhOa1pCTWpReE5qVTRSUSJ9.' +
      'eyJpc3MiOiJodHRwczovL2Nocmlzd2hpdGVkLmF1dGgwLmNvbS8iLCJzdWIiOiJyaVdQMVROR1BKMVRldzFqdXNPcVhSbkpkUkdycUpES0BjbGllbnRzIiwiY' +
      'XVkIjoiaHR0cHM6Ly9jaHJpc3doaXRlZC5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU1ODYyNzgxOSwiZXhwIjoxNTU4NzE0MjE5LCJhenAiOiJyaVdQMVR' +
      'OR1BKMVRldzFqdXNPcVhSbkpkUkdycUpESyIsInNjb3BlIjoicmVhZDp1c2VycyByZWFkOnVzZXJfaWRwX3Rva2VucyIsImd0eSI6ImNsaWVudC1jcmVkZW50aW' +
      'FscyJ9.AzcvUZGgcnrYBvbXJH6JVLWD7rjASR1Sm_icPinS6DuLPQyDAu2WJZyrhzBPLV79cuq-2BgjGcW4sC9zTSUV8TGrC0l4D08vebrUDAcFv8Y0X' +
      '-Hdk8ADQt_Enau8uPmSWD78fVIex0BH3Pxj-mbrcKBxUjeWqO2FgOUGOzJhlxR4cLZtJe3GgZri8FTR1KsUmpB-HSjNEliKbzUgMKt0u3p5B7tLPrRJHxI642pj8' +
      '83kWDqNE8oEwKqwfOYetgx9xtZQ_RmgnDEHHnxDlb2GGY6ixA5ng5s_mNBi1xehqrtZVWNX7eDI-yze7_dT78_odVXpk0y0xlu0ChZBP6ZHcA'
  },
  githubGraphQLUrl: 'https://api.github.com/graphql'
};
