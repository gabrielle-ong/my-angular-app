import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

export interface RadioOption {
  value: string;
  label: string;
}

@Component({
  selector: 'ui-radio-group',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  template: `
    <div class="radio-group">
      @if (label) {
        <label class="radio-label">{{ label }}</label>
      }
      <mat-radio-group [value]="value" [disabled]="disabled" (change)="onValueChange($event.value)">
        @for (option of options; track option.value) {
          <mat-radio-button [value]="option.value" [disabled]="disabled">
            {{ option.label }}
          </mat-radio-button>
        }
      </mat-radio-group>
    </div>
  `,
  styleUrl: './ui-radio-group.css'
})
export class UiRadioGroupComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() options: RadioOption[] = [];
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(newValue: string): void {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
