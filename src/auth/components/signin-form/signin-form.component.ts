import { Component, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninFormComponent implements OnInit {
  signinForm: FormGroup;

  @Output() singinSubmittedEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.signinForm = this.fb.group({});
  }

  onSubmit() {
    this.singinSubmittedEvent.emit();
  }
}
