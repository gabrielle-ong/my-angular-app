import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    @if (variant === 'raised') {
      <button
        mat-raised-button
        [color]="color"
        [disabled]="disabled"
        [type]="type"
        (click)="onClick()"
      >
        {{ label }}
      </button>
    } @else if (variant === 'flat') {
      <button
        mat-flat-button
        [color]="color"
        [disabled]="disabled"
        [type]="type"
        (click)="onClick()"
      >
        {{ label }}
      </button>
    } @else if (variant === 'stroked') {
      <button
        mat-stroked-button
        [color]="color"
        [disabled]="disabled"
        [type]="type"
        (click)="onClick()"
      >
        {{ label }}
      </button>
    } @else {
      <button
        mat-icon-button
        [color]="color"
        [disabled]="disabled"
        [type]="type"
        (click)="onClick()"
      >
        {{ label }}
      </button>
    }
  `,
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
