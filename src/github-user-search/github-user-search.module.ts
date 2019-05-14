import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UIThemeModule } from '@ui/ui-theme.module';
import { AppCommonModule } from '@common/app-common.module';
import { GitHubUserSearchRoutingModule } from '@github-user-search/github-user-search-routing.module';
import * as fromContainers from '@github-user-search/containers';
import * as fromComponents from '@github-user-search/components';
import * as fromFormBuilders from '@github-user-search/form-builders';
import * as fromGraphQL from '@github-user-search/graphql';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [CommonModule, ReactiveFormsModule, UIThemeModule, AppCommonModule, GitHubUserSearchRoutingModule],
  providers: [...fromFormBuilders.formBuilders, ...fromGraphQL.queries]
})
export class GitHubUserSearchModule {}
