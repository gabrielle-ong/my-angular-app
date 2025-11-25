import { Component, Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-radio-button',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  template: `
    <mat-radio-button [value]="value" [disabled]="disabled">
      {{ label }}
    </mat-radio-button>
  `,
  styleUrl: './ui-radio-button.css'
})
export class UiRadioButtonComponent {
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
}
