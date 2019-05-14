import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingIndicatorComponent {
  private _title: string;

  @Input() set title(title: string) {
    if (title && (!this._title || this._title !== title)) {
      this._title = title;
    }
  }
  get title(): string {
    return this._title;
  }
}
