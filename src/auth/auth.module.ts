import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UIThemeModule } from '@ui/ui-theme.module';
import { AppCommonModule } from '@common/app-common.module';

import { effects, reducers } from '@auth/store';
import * as fromContainers from '@auth/containers';
import * as fromComponents from '@auth/components';
import * as fromServices from '@auth/services';
import * as fromGuards from '@auth/guards';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('AUTH', reducers),
    EffectsModule.forFeature(effects),
    UIThemeModule,
    AppCommonModule,
    AuthRoutingModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [...fromServices.services, ...fromGuards.guards],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class AuthModule {}
