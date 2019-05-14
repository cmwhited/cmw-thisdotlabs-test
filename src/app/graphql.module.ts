import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink, HttpLinkHandler } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import { environment } from '@env/environment';

const uri = environment.githubGraphQlUri;
export const createApollo = (httpLink: HttpLink) => {
  const link: HttpLinkHandler = httpLink.create({ uri });
  const auth = setContext((_: any, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${environment.githubGraphQlApiToken}`
      }
    };
  });
  return {
    link: auth.concat(link),
    cache: new InMemoryCache()
  };
};

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
