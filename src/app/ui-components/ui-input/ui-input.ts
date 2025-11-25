import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  template: `
    @if (type === 'textarea') {
      <mat-form-field appearance="outline">
        <mat-label>{{ label }}</mat-label>
        <textarea
          matInput
          [value]="value"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [required]="required"
          [rows]="rows"
          (input)="onValueChange($any($event.target).value)"
        ></textarea>
      </mat-form-field>
    } @else {
      <mat-form-field appearance="outline">
        <mat-label>{{ label }}</mat-label>
        <input
          matInput
          [type]="type"
          [value]="value"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [required]="required"
          (input)="onValueChange($any($event.target).value)"
        />
      </mat-form-field>
    }
  `,
  styleUrl: './ui-input.css'
})
export class UiInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() type: 'text' | 'tel' | 'email' | 'textarea' = 'text';
  @Input() rows: number = 3;
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(newValue: string): void {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
