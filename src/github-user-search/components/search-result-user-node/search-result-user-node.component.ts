import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { isEqual } from 'lodash';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';

import { UserNode } from '@github-user-search/models';

@Component({
  selector: 'app-github-search-result-user-node',
  templateUrl: './search-result-user-node.component.html',
  styleUrls: ['./search-result-user-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultUserNodeComponent {
  private _user: UserNode;

  @Input() set userNode(user: UserNode) {
    if (!isNullOrUndefined(user) && (isNullOrUndefined(this._user) || !isEqual(this._user, user))) {
      this._user = user;
    }
  }
  get userNode(): UserNode {
    return this._user;
  }

  get faGitHub(): IconDefinition {
    return faGithub;
  }
}
