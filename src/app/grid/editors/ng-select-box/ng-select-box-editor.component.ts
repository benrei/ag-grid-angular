import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-select-box-editor",
  styles: [
    `
      .mat-form-field {
        display: block;
      }
      input {
        height: 100%;
      }
      mat-datepicker-toggle {
        position: absolute;
        right: 0;
      }
    `
  ],
  template: `
    <input matInput [matDatepicker]="picker" />
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  `
})
export class NgSelectBoxEditor implements OnInit {
  constructor() {}

  ngOnInit() {}
}
