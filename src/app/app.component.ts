import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromAuthStore from '@auth/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  authenticated$: Observable<boolean>;

  constructor(private readonly authStore: Store<fromAuthStore.AuthState>) {}

  ngOnInit() {
    this.authenticated$ = this.authStore.select(fromAuthStore.selectAuthenticated);
    // check to see if the user is authenticated already
    this.authStore.dispatch(new fromAuthStore.CheckAuth());
  }

  signout() {
    this.authStore.dispatch(new fromAuthStore.Signout());
  }
}
