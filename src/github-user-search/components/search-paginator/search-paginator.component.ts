import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { isEqual } from 'lodash';

import { PageInfo } from '@github-user-search/models';

@Component({
  selector: 'app-github-search-results-paginator',
  templateUrl: './search-paginator.component.html',
  styleUrls: ['./search-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPaginatorComponent {
  private _pageInfo: PageInfo;

  @Input() set pageInfo(info: PageInfo) {
    if (!isNullOrUndefined(info) && (isNullOrUndefined(this._pageInfo) || !isEqual(this._pageInfo, info))) {
      this._pageInfo = info;
    }
  }
  get pageInfo(): PageInfo {
    return this._pageInfo;
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
