import { Component, Input } from "@angular/core";

@Component({
  selector: "app-reset-columns-action",
  template: `
    <button *ngIf="resetFn" mat-icon-button (click)="resetFn()">
      <mat-icon>view_column</mat-icon>
    </button>
  `
})
export class ResetColumnsActionComponent {
  @Input() resetFn;
}
