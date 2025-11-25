import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: `
    @if (type === 'basic') {
      <button
        mat-button
        [color]="color"
        [disabled]="disabled"
        [type]="buttonType"
        [attr.aria-label]="ariaLabel || (showLabel ? null : label)"
        [class.full-width]="fullWidth"
        (click)="onClick()"
      >
        @if (iconPosition === 'left' && icon) {
          <mat-icon>{{ icon }}</mat-icon>
        }
        @if (showLabel && label) {
          <span>{{ label }}</span>
        }
        @if (iconPosition === 'right' && icon) {
          <mat-icon>{{ icon }}</mat-icon>
        }
      </button>
    } @else if (type === 'flat') {
      <button
        mat-flat-button
        [color]="color"
        [disabled]="disabled"
        [type]="buttonType"
        [attr.aria-label]="ariaLabel || (showLabel ? null : label)"
        [class.full-width]="fullWidth"
        (click)="onClick()"
      >
        @if (iconPosition === 'left' && icon) {
          <mat-icon>{{ icon }}</mat-icon>
        }
        @if (showLabel && label) {
          <span>{{ label }}</span>
        }
        @if (iconPosition === 'right' && icon) {
          <mat-icon>{{ icon }}</mat-icon>
        }
      </button>
    } @else if (type === 'raised') {
      <button
        mat-raised-button
        [color]="color"
        [disabled]="disabled"
        [type]="buttonType"
        [attr.aria-label]="ariaLabel || (showLabel ? null : label)"
        [class.full-width]="fullWidth"
        (click)="onClick()"
      >
        @if (iconPosition === 'left' && icon) {
          <mat-icon>{{ icon }}</mat-icon>
        }
        @if (showLabel && label) {
          <span>{{ label }}</span>
        }
        @if (iconPosition === 'right' && icon) {
          <mat-icon>{{ icon }}</mat-icon>
        }
      </button>
    } @else if (type === 'stroked') {
      <button
        mat-stroked-button
        [color]="color"
        [disabled]="disabled"
        [type]="buttonType"
        [attr.aria-label]="ariaLabel || (showLabel ? null : label)"
        [class.full-width]="fullWidth"
        (click)="onClick()"
      >
        @if (iconPosition === 'left' && icon) {
          <mat-icon>{{ icon }}</mat-icon>
        }
        @if (showLabel && label) {
          <span>{{ label }}</span>
        }
        @if (iconPosition === 'right' && icon) {
          <mat-icon>{{ icon }}</mat-icon>
        }
      </button>
    } @else if (type === 'icon') {
      <button
        mat-icon-button
        [color]="color"
        [disabled]="disabled"
        [type]="buttonType"
        [attr.aria-label]="ariaLabel || label"
        [class.full-width]="fullWidth"
        (click)="onClick()"
      >
        @if (icon) {
          <mat-icon>{{ icon }}</mat-icon>
        }
        @if (showLabel && label) {
          <span>{{ label }}</span>
        }
      </button>
    } @else if (type === 'fab') {
      <button
        mat-fab
        [color]="color"
        [disabled]="disabled"
        [type]="buttonType"
        [attr.aria-label]="ariaLabel || label"
        (click)="onClick()"
      >
        @if (icon) {
          <mat-icon>{{ icon }}</mat-icon>
        }
        @if (showLabel && label) {
          <span>{{ label }}</span>
        }
      </button>
    } @else if (type === 'Extended') {
      <button
        mat-fab
        extended
        [color]="color"
        [disabled]="disabled"
        [type]="buttonType"
        [attr.aria-label]="ariaLabel || (showLabel ? null : label)"
        (click)="onClick()"
      >
        @if (iconPosition === 'left' && icon) {
          <mat-icon>{{ icon }}</mat-icon>
        }
        @if (showLabel && label) {
          <span>{{ label }}</span>
        }
        @if (iconPosition === 'right' && icon) {
          <mat-icon>{{ icon }}</mat-icon>
        }
      </button>
    }
  `,
  styleUrl: './ui-button.css'
})
export class UiButtonComponent {
  @Input() type: 'basic' | 'flat' | 'raised' | 'stroked' | 'icon' | 'fab' | 'Extended' = 'raised';
  @Input() disabled: boolean = false;
  @Input() iconPosition: 'left' | 'right' | 'none' = 'none';
  @Input() fullWidth: boolean = false;
  @Input() label: string = '';
  @Input() showLabel: boolean = true;
  @Input() ariaLabel: string = '';
  @Input() icon: string = '';
  @Input() buttonType: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Output() click = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }
}
