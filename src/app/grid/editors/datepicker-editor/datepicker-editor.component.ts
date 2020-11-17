import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { ICellEditorAngularComp } from "ag-grid-angular";

@Component({
  selector: "app-datepicker-editor",
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Choose a date</mat-label>
      <input matInput [matDatepicker]="picker" />
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `
})
export class DatepickerEditorComponent
  implements ICellEditorAngularComp, AfterViewInit {
  gridApi;
  initValue: any;
  private params: any;
  value: any;

  options: any[];
  filteredOptions: any[];

  @ViewChild("picker", { read: ViewContainerRef }) public picker: any;

  agInit(params: any): void {
    console.log(params);
    this.gridApi = params.api;
    this.initValue = params.value;
    this.params = params;
    this.setInitialState(this.params);
    this.options = params.values;
    this.filteredOptions = params.values;
  }

  setInitialState(params: any) {
    let startValue;
    const { code, key } = params;
    switch (code || key) {
      case "Backspace":
      case "Delete":
        startValue = "";
      default:
        startValue = params.value;
    }
    this.value = startValue;
  }

  getValue(): any {
    return this.value;
  }

  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  ngAfterViewInit() {
    window.setTimeout(() => {
      this.picker.element.nativeElement.focus();
    });
  }

  private customKeyHandler(event): boolean {
    const { code, key } = event;
    switch (code || key) {
      case "Escape":
        this.value = this.initValue;
        this.gridApi.stopEditing();
        return true;
      case "ArrowLeft":
      case "ArrowRight":
        event.stopPropagation();
        return true;
    }
    return false;
  }
}
