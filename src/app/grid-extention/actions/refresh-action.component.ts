import { Component, Input } from "@angular/core";

@Component({
  selector: "app-refresh-action",
  template: `
    <button
      *ngIf="refreshFn"
      mat-icon-button
      matTooltip="Refresh"
      (click)="refreshFn()"
    >
      <mat-icon>sync</mat-icon>
    </button>
  `
})
export class RefreshActionComponent {
  @Input() refreshFn;
}
