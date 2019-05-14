import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from '@github-user-search/containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: fromContainers.UserSearchContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitHubUserSearchRoutingModule {}
