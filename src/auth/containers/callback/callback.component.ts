import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuthStore from '@auth/store';

@Component({
  selector: 'app-auth-callback',
  template: `
    <div>
      <app-loading-indicator title="Authenticating..."></app-loading-indicator>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthCallbackComponent implements OnInit {
  constructor(private readonly authStore: Store<fromAuthStore.AuthState>) {}

  // if this component is initiated, we have successfully the authenticated the user
  // dispatch the SigninComplete action
  ngOnInit() {
    this.authStore.dispatch(new fromAuthStore.SigninComplete());
  }
}
