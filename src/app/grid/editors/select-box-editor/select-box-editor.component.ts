import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { ICellEditorAngularComp } from "ag-grid-angular";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

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
      (keydown)="onKeyDown($event)"
      [matAutocomplete]="auto"
    />
    <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
      <mat-option *ngFor="let option of filteredOptions" [value]="option">
        {{ option.name }}
      </mat-option>
    </mat-autocomplete>
  `
})
export class SelectBoxEditor implements ICellEditorAngularComp, AfterViewInit {
  timerId: number;
  private params: any;
  value: any;

  searchInput = new FormControl();
  options: any[] = [{ name: "Mary" }, { name: "Shelley" }, { name: "Igor" }];
  filteredOptions: any[];

  @ViewChild("input", { read: ViewContainerRef }) public input: any;

  agInit(params: any): void {
    this.params = params;
    this.setInitialState(this.params);
    this.filteredOptions = this.options;
  }

  setInitialState(params: any) {
    let startValue;

    if (params.keyPress === KEY_BACKSPACE || params.keyPress === KEY_DELETE) {
      // if backspace or delete pressed, we clear the cell
      startValue = "";
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
    console.log();
    return this.value;
  }

  onKeyDown(event: any): void {
    if (this.isLeftOrRight(event) || this.deleteOrBackspace(event)) {
      event.stopPropagation();
      return;
    }
    this.value = event.target.value;
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
  displayFn(obj: any): string {
    return obj && obj.name ? obj.name : "";
  }

  private _debounceFunction = (func, delay) => {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(func, delay);
  };
}
