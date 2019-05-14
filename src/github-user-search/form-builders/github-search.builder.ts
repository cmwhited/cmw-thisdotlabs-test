import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()
export class GitHubSearchFormBuilder {
  private static readonly githubSearchModel = {
    searchInput: new FormControl(null, Validators.required)
  };

  constructor(private readonly fb: FormBuilder) {}

  build(): FormGroup {
    return this.fb.group(GitHubSearchFormBuilder.githubSearchModel);
  }
}
