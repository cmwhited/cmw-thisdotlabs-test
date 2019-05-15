import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuthStore from '@auth/store';

@Component({
  selector: 'app-signin-container',
  template: `
    <app-signin-form (singinSubmittedEvent)="beginSignin()"></app-signin-form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninContainerComponent {
  constructor(private readonly authStore: Store<fromAuthStore.AuthState>) {}

  // begin the auth0 signin flow
  beginSignin() {
    this.authStore.dispatch(new fromAuthStore.Signin());
  }
}
