import { Component, Input } from "@angular/core";

@Component({
  selector: "app-refresh-action",
  template: `
    <button *ngIf="refreshFn" mat-icon-button (click)="refreshFn()">
      <mat-icon>refresh</mat-icon>
    </button>
  `
})
export class RefreshActionComponent {
  @Input() refreshFn;
}
