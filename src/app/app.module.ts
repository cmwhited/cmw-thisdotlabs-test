import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink, HttpLinkHandler } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import { environment } from '@env/environment';
import { UIThemeModule } from '@ui/ui-theme.module';
import { AppCommonModule } from '@common/app-common.module';
import { AuthModule } from '@auth/auth.module';

import { reducers, metaReducers } from '@app/store';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpLinkModule,
    ApolloModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    UIThemeModule,
    AppCommonModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // instantiate apollo graphql client
  constructor(private readonly apollo: Apollo, private readonly httpLink: HttpLink, private readonly http: HttpClient) {
    const link: HttpLinkHandler = this.httpLink.create({ uri: environment.githubGraphQLUrl });
    const auth = setContext((_: any, { headers }) => {
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${localStorage.getItem('GITHUB_ACCESS_TOKEN')}`
        }
      };
    });
    // create the apollo client
    this.apollo.create({
      link: auth.concat(link),
      cache: new InMemoryCache()
    });
  }
}
