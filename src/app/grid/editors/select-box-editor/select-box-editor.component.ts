import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { ICellEditorAngularComp } from "ag-grid-angular";

const KEY_BACKSPACE = 8;
const KEY_DELETE = 46;
const KEY_F2 = 113;
const KEY_ENTER = 13;
const KEY_TAB = 9;

@Component({
  selector: "numeric-cell",
  template: `
    <input
      #input
      type="text"
      matInput
      (keyup)="onKeyUp($event)"
      [matAutocomplete]="auto"
      [value]="value"
    />
    <mat-autocomplete
      #auto="matAutocomplete"
      [displayWith]="displayFn"
      (optionSelected)="onOptionSelected($event)"
    >
      <mat-option *ngFor="let option of filteredOptions" [value]="option">
        {{ option }}
      </mat-option>
    </mat-autocomplete>
  `
})
export class SelectBoxEditor implements ICellEditorAngularComp, AfterViewInit {
  timerId: number;
  private params: any;
  value: any;
  gridApi;

  searchInput = new FormControl();
  options: any[];
  filteredOptions: any[];

  @ViewChild("input", { read: ViewContainerRef }) public input: any;

  agInit(params: any): void {
    console.log(params);
    this.params = params;
    this.gridApi = params.api;
    this.setInitialState(this.params);
    this.options = params.values;
    this.filteredOptions = params.values;
  }

  setInitialState(params: any) {
    let startValue;

    if (params.keyPress === KEY_BACKSPACE || params.keyPress === KEY_DELETE) {
      // if backspace or delete pressed, we clear the cell
      startValue = "";
      console.log(params);
    } else if (params.charPress) {
      // if a letter was pressed, we start with the letter
      startValue = params.charPress;
    } else {
      // otherwise we start with the current value
      startValue = params.value;
      if (params.keyPress === KEY_F2) {
      }
    }

    this.value = startValue;
  }

  getValue(): any {
    return this.value;
  }

  onKeyUp(event: any): void {
    if (this.isLeftOrRight(event)) {
      event.stopPropagation();
      return;
    }
    this.value = event.target.value;
    this._debounceFunction(() => {
      if (this.value?.length > 1)
        this.filteredOptions = this.options.filter(o =>
          o.toLowerCase().includes(this.value)
        );
      else this.filteredOptions = this.options;
    }, 250);
  }

  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  ngAfterViewInit() {
    window.setTimeout(() => {
      this.input.element.nativeElement.focus();
    });
  }

  private getCharCodeFromEvent(event: any): any {
    event = event || window.event;
    return typeof event.which == "undefined" ? event.keyCode : event.which;
  }

  private deleteOrBackspace(event: any) {
    return (
      [KEY_DELETE, KEY_BACKSPACE].indexOf(this.getCharCodeFromEvent(event)) > -1
    );
  }

  private isLeftOrRight(event: any) {
    return [37, 39].indexOf(this.getCharCodeFromEvent(event)) > -1;
  }

  onOptionSelected(event) {
    console.log(event);
    this.value = event.option.value;
    this.gridApi.tabToNextCell();
  }

  displayFn(obj: any): string {
    return obj;
    // return obj && obj.name ? obj.name : "";
  }

  private _debounceFunction = (func, delay) => {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(func, delay);
  };
}
