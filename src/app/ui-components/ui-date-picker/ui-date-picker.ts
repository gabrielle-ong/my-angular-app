import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-date-picker',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule
  ],
  template: `
    <mat-form-field appearance="outline">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        [matDatepicker]="picker"
        [value]="value"
        [disabled]="disabled"
        [required]="required"
        (dateChange)="onValueChange($event.value)"
      />
      <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `,
  styleUrl: './ui-date-picker.css'
})
export class UiDatePickerComponent {
  @Input() label: string = '';
  @Input() value: Date | null = null;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Output() valueChange = new EventEmitter<Date | null>();
  @ViewChild('picker') picker: any;

  onValueChange(newValue: Date | null): void {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
