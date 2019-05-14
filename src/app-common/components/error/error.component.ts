import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent {
  private _title: string;
  private _errors: any[] = [];

  @Input() set title(title: string) {
    if (title && (!this._title || this._title !== title)) {
      this._title = title;
    }
  }
  get title(): string {
    return this._title;
  }

  @Input() set errors(errors: any[]) {
    this._errors = errors;
  }
  get errors(): any[] {
    return this._errors;
  }
  get errorMessages(): string[] {
    return this._errors.map((err: any) => err.message || 'An unknown error occurred');
  }
}
