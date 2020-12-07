import { Component, Input, HostBinding } from "@angular/core";

@Component({
  selector: "app-delete-action",
  template: `
    <button
      *ngIf="deleteFn"
      mat-icon-button
      matTooltip="Delete"
      (click)="deleteFn()"
      [disabled]="isDisabled"
    >
      <mat-icon>delete</mat-icon>
    </button>
  `
})
export class DeleteActionComponent {
  @Input() deleteFn;
  @Input() gridApi;
  @HostBinding("class.disabled") get isDisabled() {
    return !this.gridApi?.getSelectedRows()?.[0];
  }
}
