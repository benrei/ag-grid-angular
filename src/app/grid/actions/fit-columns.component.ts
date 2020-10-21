import { Component, Input } from "@angular/core";

@Component({
  selector: "app-fit-columns-action",
  template: `
    <button *ngIf="fitColumnsFn" mat-icon-button (click)="fitColumnsFn()">
      <mat-icon>view_column</mat-icon>
    </button>
  `
})
export class FitColumnsActionComponent {
  @Input() fitColumnsFn;
}
