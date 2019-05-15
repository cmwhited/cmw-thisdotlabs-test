import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from '@github-user-search/containers';
import * as fromAuthGuards from '@auth/guards';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: fromContainers.UserSearchContainerComponent,
    canActivate: [fromAuthGuards.AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitHubUserSearchRoutingModule {}
