import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-toggle',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule],
  template: `
    <mat-slide-toggle
      [checked]="checked"
      [disabled]="disabled"
      (change)="onCheckedChange($event.checked)"
    >
      {{ label }}
    </mat-slide-toggle>
  `,
  styleUrl: './ui-toggle.css'
})
export class UiToggleComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onCheckedChange(checked: boolean): void {
    this.checked = checked;
    this.checkedChange.emit(checked);
  }
}
