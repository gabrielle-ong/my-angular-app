import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css'
})
export class UiButtonComponent {
  @Input() label: string = '';
  @Input() variant: 'raised' | 'flat' | 'stroked' | 'icon' = 'raised';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() click = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }
}
