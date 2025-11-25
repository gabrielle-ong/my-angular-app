import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule],
  template: `
    <mat-checkbox
      [checked]="checked"
      [disabled]="disabled"
      (change)="onCheckedChange($event.checked)"
    >
      {{ label }}
    </mat-checkbox>
  `,
  styleUrl: './ui-checkbox.css'
})
export class UiCheckboxComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onCheckedChange(checked: boolean): void {
    this.checked = checked;
    this.checkedChange.emit(checked);
  }
}
