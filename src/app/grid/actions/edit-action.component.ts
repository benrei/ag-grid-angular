import { Component, Input, HostBinding } from "@angular/core";

@Component({
  selector: "app-edit-action",
  template: `
    <button
      *ngIf="editFn"
      mat-icon-button
      matTooltip="Edit"
      (click)="editFn()"
      [disabled]="isDisabled"
    >
      <mat-icon>edit</mat-icon>
    </button>
  `
})
export class EditActionComponent {
  @Input() editFn;
  @Input() gridApi;
  @HostBinding("class.disabled") get isDisabled() {
    return !this.gridApi?.getSelectedRows()?.[0];
  }
}
