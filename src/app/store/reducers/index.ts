import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '@env/environment';

import { RouterStateUrl } from './custom-route.serializer';

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
