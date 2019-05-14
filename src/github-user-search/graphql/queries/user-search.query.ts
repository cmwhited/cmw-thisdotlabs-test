import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { Response, Variables } from '@github-user-search/models';

@Injectable()
export class UserSearchQuery extends Query<Response, Variables> {
  document = gql`
    query GitHubUserSearch($after: String, $before: String, $first: Int, $last: Int, $query: String!, $type: SearchType = USER) {
      search(after: $after, before: $before, first: $first, last: $last, query: $query, type: $type) {
        userCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        nodes {
          __typename
          ... on User {
            login
            bio
            email
            location
            name
            url
            avatarUrl(size: 250)
            followers {
              totalCount
            }
            following {
              totalCount
            }
            starredRepositories {
              totalCount
            }
          }
        }
      }
    }
  `;
}
