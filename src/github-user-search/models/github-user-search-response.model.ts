export type PageInfo = {
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;
  readonly startCursor: string;
  readonly endCursor: string;
};

type SectionCount = {
  readonly totalCount?: number;
};

type URI = string;

export type UserNode = {
  readonly __typename: string;
  readonly login: string;
  readonly bio?: string;
  readonly email?: string;
  readonly location?: string;
  readonly name: string;
  readonly url: URI;
  readonly avatarUrl?: URI;
  readonly followers: SectionCount;
  readonly following: SectionCount;
  readonly starredRepositories: SectionCount;
};

export type GitHubUserSearchResponse = {
  readonly userCount: number;
  readonly pageInfo: PageInfo;
  readonly nodes?: UserNode[];
};

export interface Response {
  readonly search: GitHubUserSearchResponse;
}

export interface Variables {
  readonly after?: string;
  readonly before?: string;
  readonly first?: number;
  readonly last?: number;
  readonly query: string;
}
