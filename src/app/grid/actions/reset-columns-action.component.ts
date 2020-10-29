import { Component, Input } from "@angular/core";

@Component({
  selector: "app-reset-columns-action",
  template: `
    <button
      *ngIf="resetFn"
      mat-icon-button
      matTooltip="Reset columns"
      (click)="resetFn()"
    >
      <mat-icon>rotate_left</mat-icon>
    </button>
  `
})
export class ResetColumnsActionComponent {
  @Input() resetFn;
}
