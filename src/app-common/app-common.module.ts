import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIThemeModule } from '@ui/ui-theme.module';
import * as fromComponents from '@common/components';

@NgModule({
  imports: [CommonModule, UIThemeModule],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components]
})
export class AppCommonModule {}
