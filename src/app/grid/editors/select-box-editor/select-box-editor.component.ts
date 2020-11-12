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
      type="text"
      matInput
      (keydown)="onKeyDown($event)"
      [matAutocomplete]="auto"
    />
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let option of filteredOptions" [value]="option">
        {{ option.name }}
      </mat-option>
    </mat-autocomplete>
  `
})
export class SelectBoxEditor implements ICellEditorAngularComp, AfterViewInit {
  timerId: number;
  private params: any;
  public value: number;
  private cancelBeforeStart: boolean = false;
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
    return this.value;
  }

  isCancelBeforeStart(): boolean {
    return this.cancelBeforeStart;
  }

  // will reject the number if it greater than 1,000,000
  // not very practical, but demonstrates the method.
  isCancelAfterEnd(): boolean {
    return this.value > 1000000;
  }

  onKeyDown(event: any): void {
    if (this.isLeftOrRight(event) || this.deleteOrBackspace(event)) {
      event.stopPropagation();
      return;
    }

    if (
      !this.finishedEditingPressed(event) &&
      !this.isKeyPressedNumeric(event)
    ) {
      if (event.preventDefault) event.preventDefault();
    }
  }

  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  ngAfterViewInit() {
    window.setTimeout(() => {
      this.input.element.nativeElement.focus();
      // when we started editing, we want the carot at the end, not the start.
      // this comes into play in two scenarios: a) when user hits F2 and b)
      // when user hits a printable character, then on IE (and only IE) the carot
      // was placed after the first character, thus 'apply' would end up as 'pplea'
      const length = this.input.element.nativeElement.value
        ? this.input.element.nativeElement.value.length
        : 0;
      if (length > 0) {
        this.input.element.nativeElement.setSelectionRange(length, length);
      }

      this.input.element.nativeElement.focus();
    });
  }
  private _debounceFunction = (func, delay) => {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(func, delay);
  };

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  private getCharCodeFromEvent(event: any): any {
    event = event || window.event;
    return typeof event.which == "undefined" ? event.keyCode : event.which;
  }

  private isCharNumeric(charStr: string): boolean {
    return !!/\d/.test(charStr);
  }

  private isKeyPressedNumeric(event: any): boolean {
    const charCode = this.getCharCodeFromEvent(event);
    const charStr = event.key ? event.key : String.fromCharCode(charCode);
    return this.isCharNumeric(charStr);
  }

  private deleteOrBackspace(event: any) {
    return (
      [KEY_DELETE, KEY_BACKSPACE].indexOf(this.getCharCodeFromEvent(event)) > -1
    );
  }

  private isLeftOrRight(event: any) {
    return [37, 39].indexOf(this.getCharCodeFromEvent(event)) > -1;
  }

  private finishedEditingPressed(event: any) {
    const charCode = this.getCharCodeFromEvent(event);
    return charCode === KEY_ENTER || charCode === KEY_TAB;
  }
}
