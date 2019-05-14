import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { GitHubSearch } from '@github-user-search/models';
import { UserSearchQuery } from '@github-user-search/graphql';

@Component({
  selector: 'app-user-search-container',
  templateUrl: './user-search-container.component.html',
  styleUrls: ['./user-search-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchContainerComponent {
  loading$: Observable<boolean>;
  error$: Observable<any>;
  data$: Observable<any>;

  constructor(private readonly apollo: Apollo, private userSearchQuery: UserSearchQuery) {}

  /**
   * Take the submitted `GitHubSearch` data and plug it into the graphql query as the input
   * and run the query using the `Apollo` client
   * @param query `GitHubSearch` the submitted form value from the GitHub user search
   */
  submitGitHubUserSearch(query: GitHubSearch) {
    this.data$ = this.userSearchQuery.watch({ query: query.searchInput, first: 25 }).valueChanges.pipe(map(({ data }) => data.search));
  }
}
