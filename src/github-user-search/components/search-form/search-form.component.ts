import { Component, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { GitHubSearchFormBuilder } from '@github-user-search/form-builders';
import { GitHubSearch } from '@github-user-search/models';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit {
  private _searchFormGroup: FormGroup;

  set searchFormGroup(fg: FormGroup) {
    this._searchFormGroup = fg;
  }
  get searchFormGroup(): FormGroup {
    return this._searchFormGroup;
  }

  @Output() searchSubmittedEvent: EventEmitter<GitHubSearch> = new EventEmitter<GitHubSearch>();

  constructor(private readonly searchFormBuilder: GitHubSearchFormBuilder) {}

  ngOnInit() {
    this.searchFormGroup = this.searchFormBuilder.build();
  }

  clearSearchInput() {
    this.searchFormGroup.get('searchInput').patchValue(null);
    this.searchFormGroup.get('searchInput').updateValueAndValidity();
  }

  /**
   * The submitted Form value for the GitHub user search.
   * Emit this as an event for the parent container to process
   */
  onSubmit(formValue: GitHubSearch) {
    this.searchSubmittedEvent.emit(formValue);
  }
}
