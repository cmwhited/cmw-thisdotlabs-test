import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { isNullOrUndefined } from 'util';

import { GitHubUserSearchResponse, PageInfo, UserNode } from '@github-user-search/models';

@Component({
  selector: 'app-github-user-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class SearchResultsComponent {
  private _response: GitHubUserSearchResponse;

  @Input() set response(searchResponse: GitHubUserSearchResponse) {
    if (!isNullOrUndefined(searchResponse)) {
      this._response = searchResponse;
    }
  }
  get response(): GitHubUserSearchResponse {
    return this._response;
  }
  get responsePageInfo(): PageInfo {
    return !isNullOrUndefined(this._response) && !isNullOrUndefined(this._response.pageInfo) ? this._response.pageInfo : null;
  }
  get responseUserNodes(): UserNode[] {
    return !isNullOrUndefined(this._response) && !isNullOrUndefined(this._response.nodes) ? this._response.nodes : null;
  }

  @Output() nextPageEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() prevPageEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Get the next page of results starting from the `endCursor`
   * @param endCursor the cursor value of the last item currently being displayed in the response
   */
  onGetNextPage(endCursor: string) {
    this.nextPageEventEmitter.emit(endCursor);
  }

  /**
   * Get the previous page of results traversing back from the `startCursor`
   * @param startCursor the cursor value of the first item currently being displayed in the response
   */
  onGetPrevPage(startCursor: string) {
    this.prevPageEventEmitter.emit(startCursor);
  }
}
