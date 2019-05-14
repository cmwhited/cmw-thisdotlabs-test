import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()
export class GitHubSearchFormBuilder {
  private static readonly githubSearchModel = {
    searchInput: new FormControl(null, Validators.required),
    pageSize: new FormControl(25, Validators.required)
  };

  constructor(private readonly fb: FormBuilder) {}

  build(): FormGroup {
    return this.fb.group(GitHubSearchFormBuilder.githubSearchModel);
  }
}
