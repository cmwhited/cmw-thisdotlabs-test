import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreRouterConnectingModule, NavigationActionTiming } from '@ngrx/router-store';

import { CustomSerializer } from '@app/store/reducers/custom-route.serializer';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'github-user-search'
  },
  {
    path: 'github-user-search',
    loadChildren: '@github-user-search/github-user-search.module#GitHubUserSearchModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
