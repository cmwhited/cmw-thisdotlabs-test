import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuthStore from '@auth/store';

@Component({
  selector: 'app-signin-container',
  template: `
    <div>
      <app-loading-indicator title="Beginning Authentication..."></app-loading-indicator>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninContainerComponent implements OnInit {
  constructor(private readonly authStore: Store<fromAuthStore.AuthState>) {}

  // begin the auth0 authentication flow
  ngOnInit() {
    this.authStore.dispatch(new fromAuthStore.Signin());
  }
}
