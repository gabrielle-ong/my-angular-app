import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

export interface AccordionPanel {
  title: string;
  content: string;
  expanded?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'ui-accordion',
  standalone: true,
  imports: [MatExpansionModule],
  template: `
    <mat-accordion [multi]="multi" [displayMode]="displayMode">
      @for (panel of panels; track $index) {
        <mat-expansion-panel
          [expanded]="panel.expanded"
          [disabled]="panel.disabled"
          (opened)="onPanelChange($index, true)"
          (closed)="onPanelChange($index, false)"
        >
          <mat-expansion-panel-header>
            <mat-panel-title>
              {{ panel.title }}
            </mat-panel-title>
          </mat-expansion-panel-header>
          <p>{{ panel.content }}</p>
        </mat-expansion-panel>
      }
    </mat-accordion>
  `,
  styleUrl: './ui-accordion.css'
})
export class UiAccordionComponent {
  @Input() panels: AccordionPanel[] = [];
  @Input() multi: boolean = false;
  @Input() displayMode: 'default' | 'flat' = 'default';
  @Output() panelChange = new EventEmitter<{ index: number; expanded: boolean }>();

  onPanelChange(index: number, expanded: boolean): void {
    this.panelChange.emit({ index, expanded });
  }
}

