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
    responseType: 'token id_token',
    mgmtToken:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6RTJPRFpGUkRoR1FUa3pNa00yTWpFek5qWkdOVVZCT1RRMU5UTXhOa1pCTWpReE5qVTRSUSJ9.eyJpc3MiOiJodHRwczovL2Nocmlzd2hpdGVkLmF1dGgwLmNvbS8iLCJzdWIiOiJyaVdQMVROR1BKMVRldzFqdXNPcVhSbkpkUkdycUpES0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9jaHJpc3doaXRlZC5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU1Nzg5MDMwNCwiZXhwIjoxNTU3OTc2NzA0LCJhenAiOiJyaVdQMVROR1BKMVRldzFqdXNPcVhSbkpkUkdycUpESyIsInNjb3BlIjoicmVhZDp1c2VycyByZWFkOnVzZXJfaWRwX3Rva2VucyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.SI600O1-_d86-P3w7s9g4MggD7T1cAc-YD8XGLt7LTQoduR4BqHfQQN0cLxqmLDCKVyKwQvX2wcc9NMQPzi6NAHtejxnAYNNfRdWiFNRNoZjlbiZ_hK64SdXN5z7WAtrHRx4UwMby7G2dQMh3p7a7TVUrCDT31xgcLuJj7v6LtniHsSkWBOUb6avBN5gJLRNufGlFtA_MySviYtceaT71cpoZbHkcS5kMMmaVQrd2b1h0TPRN4EJ0X0UH_OfCQXPmsrQN0ue2s00y11zf6bwVQD6TaImgLuoaEvugbk8uMRF_vYUKpB8Akn8SnOMweDzKWWGJVlLr_eYNcuIZbjBzg'
  },
  githubGraphQLUrl: 'https://api.github.com/graphql'
};
