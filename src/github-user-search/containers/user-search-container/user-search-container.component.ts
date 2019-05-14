import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { GitHubSearch, Response, GitHubUserSearchResponse, Variables } from '@github-user-search/models';
import { UserSearchQuery } from '@github-user-search/graphql';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-user-search-container',
  templateUrl: './user-search-container.component.html',
  styleUrls: ['./user-search-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchContainerComponent {
  private static currentSearch: GitHubSearch = null;
  private static currentVariables: Variables = null;

  results$: Observable<ApolloQueryResult<Response>>;
  loading$: Observable<boolean> = of(false);
  error$: Observable<any>;
  data$: Observable<GitHubUserSearchResponse>;

  constructor(private userSearchQuery: UserSearchQuery) {}

  /**
   * Take the submitted `GitHubSearch` data and plug it into the graphql query as the input
   * and run the query using the `Apollo` client
   * @param variables `Variables` the submitted form value from the GitHub user search built into the expected variables
   */
  submitGitHubUserSearch(variables: Variables) {
    UserSearchContainerComponent.currentVariables = variables;
    this.results$ = this.userSearchQuery.watch(variables).valueChanges;
    this.loading$ = this.results$.pipe(map((result: ApolloQueryResult<Response>) => result.loading));
    this.error$ = this.results$.pipe(map((result: ApolloQueryResult<Response>) => result.errors));
    this.data$ = this.results$.pipe(map((result: ApolloQueryResult<Response>) => result.data.search));
  }

  /**
   * Take the submitted `GitHubSearch` params, build the `Variables` instance from the submitted value.
   * Submit the search with the apollo client.
   * @param search `GitHubSearch` the user-submitted search parameters
   */
  githubUserSearchSubmitted(search: GitHubSearch) {
    UserSearchContainerComponent.currentSearch = search;
    const variables: Variables = {
      ...UserSearchContainerComponent.currentVariables,
      query: search.searchInput,
      first: search.pageSize
    };
    this.submitGitHubUserSearch(variables);
  }

  /**
   * Build a `Variables` instance to paginate to the next set of results from the search
   * @param endCursor the last cursor value in the current list of results
   */
  getNextPageResults(endCursor: string) {
    const nextPageVariables: Variables = {
      ...UserSearchContainerComponent.currentVariables,
      after: endCursor,
      before: undefined,
      first: UserSearchContainerComponent.currentSearch.pageSize,
      last: undefined
    };
    this.submitGitHubUserSearch(nextPageVariables);
  }

  /**
   * Build a `Variables` instance to paginate to the previous set of results from the search
   * @param startCursor the first cursor value in the current list of results
   */
  getPrevPageResults(startCursor: string) {
    const prevPageVariables: Variables = {
      ...UserSearchContainerComponent.currentVariables,
      after: undefined,
      before: startCursor,
      first: undefined,
      last: UserSearchContainerComponent.currentSearch.pageSize
    };
    this.submitGitHubUserSearch(prevPageVariables);
  }
}
