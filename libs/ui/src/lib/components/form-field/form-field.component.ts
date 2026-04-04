import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'k10-form-field',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent {
  readonly inputId  = input('');
  readonly label    = input('');
  readonly required = input(false);
  readonly hasError = input(false);
  readonly error    = input('');
  readonly helpText = input('');
}
