import { Component, Input } from "@angular/core";

@Component({
  selector: "app-fit-columns-action",
  template: `
    <button
      *ngIf="fitColumnsFn"
      mat-icon-button
      matTooltip="Fit columns"
      (click)="fitColumnsFn()"
    >
      <mat-icon>view_column</mat-icon>
    </button>
  `
})
export class FitColumnsActionComponent {
  @Input() fitColumnsFn;
}
