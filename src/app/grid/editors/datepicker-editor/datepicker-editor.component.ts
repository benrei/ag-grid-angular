import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { ICellEditorAngularComp } from "ag-grid-angular";
import moment from "moment";
import { MatDatepicker } from "@angular/material/datepicker";

const KEY_DELETE = 46;
const KEY_BACKSPACE = 8;

@Component({
  selector: "app-datepicker-editor",
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
    <input
      [matDatepicker]="picker"
      (dateChange)="onDateChange($event)"
      [value]="value"
      #input
    />
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  `
})
export class DatepickerEditor implements ICellEditorAngularComp, AfterViewInit {
  gridApi;
  initValue: string;
  params: any;
  value: any;
  firstPressIsChar: boolean;

  @ViewChild("picker") picker: MatDatepicker<Date>;
  @ViewChild("input", { read: ViewContainerRef }) public input: any;

  agInit(params: any): void {
    this.gridApi = params.api;
    this.initValue = params.value;
    this.params = params;
    this.setInitialState(this.params);
  }

  setInitialState(params: any) {
    console.log(params);
    const { charPress, keyPress } = params;
    this.firstPressIsChar = !!charPress;
    // this.value = charPress;
    console.log(this.value);
  }

  getValue(): any {
    return moment(this.value).isValid()
      ? moment(this.value).format("DD/MM/YYYY")
      : this.initValue;
  }

  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  ngAfterViewInit() {
    this.picker.open();
    window.setTimeout(() => {
      this.input.element.nativeElement.focus();
    });
  }
  onDateChange({ value }) {
    this.value = moment(value).toDate();
    this.gridApi.tabToNextCell();
    // this.gridApi.stopEditing();
  }
}
