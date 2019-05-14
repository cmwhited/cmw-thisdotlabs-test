import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

export interface Response {
  [key: string]: any;
}

@Injectable()
export class UserSearchQuery extends Query<Response> {
  document = gql`
    query GitHubUserSearch($after: String, $before: String, $first: Int, $last: Int, $query: String!, $type: SearchType = USER) {
      search(after: $after, before: $before, first: $first, last: $last, query: $query, type: $type) {
        userCount
        nodes {
          __typename
          ... on User {
            bio
            company
            email
            location
            name
            websiteUrl
            url
            avatarUrl(size: 250)
            followers {
              totalCount
            }
            following {
              totalCount
            }
            contributionsCollection {
              totalCommitContributions
              totalRepositoryContributions
            }
            projectsUrl
            projects {
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
