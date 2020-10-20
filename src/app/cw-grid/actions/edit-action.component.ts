import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-edit-action',
  template: `
    <button *ngIf="editFn" 
      mat-icon-button 
      (click)="editFn()"
      [disabled]="isDisabled">
        <mat-icon>add</mat-icon>
    </button>
  `,
})
export class EditActionComponent {
  @Input() gridApi;
  @Input() editFn;
  @HostBinding("class.disabled") get isDisabled() {
    return !(this.gridApi?.getSelectedRows()?.[0]);
  }
}