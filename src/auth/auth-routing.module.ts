import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromContainers from '@auth/containers';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'signin',
        pathMatch: 'full',
        component: fromContainers.SigninContainerComponent
      },
      {
        path: 'callback',
        pathMatch: 'full',
        component: fromContainers.AuthCallbackComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
