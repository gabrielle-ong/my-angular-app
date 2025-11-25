import { Component, Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-radio-button',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './ui-radio-button.html',
  styleUrl: './ui-radio-button.css'
})
export class UiRadioButtonComponent {
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
}
