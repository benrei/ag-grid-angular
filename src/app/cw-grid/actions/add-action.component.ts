import { Component, Input } from "@angular/core";

@Component({
  selector: "app-add-action",
  template: `
    <button
      *ngIf="addFn"
      mat-icon-button
      (click)="addFn()"
      [disabled]="isDisabled"
    >
      <mat-icon>add</mat-icon>
    </button>
  `
})
export class AddActionComponent {
  @Input() addFn;
}
