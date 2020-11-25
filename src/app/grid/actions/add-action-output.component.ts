import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-add-action",
  template: `
    <button
      *ngIf="add"
      mat-icon-button
      (click)="add.emit($event)"
      matTooltip="Add"
    >
      <mat-icon>add</mat-icon>
    </button>
  `
})
export class AddActionComponent {
  @Output() add = new EventEmitter<{}>();
}
