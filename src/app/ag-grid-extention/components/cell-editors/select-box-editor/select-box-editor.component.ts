import { HttpClient } from "@angular/common/http";
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { ICellEditorAngularComp } from "ag-grid-angular";

const KEY_BACKSPACE = 8;
const KEY_DELETE = 46;
const KEY_F2 = 113;

@Component({
  selector: "select-box-cell",
  templateUrl: "./select-box-editor.component.html",
  styles: []
})
export class SelectBoxEditor implements ICellEditorAngularComp, AfterViewInit {
  gridApi;
  initValue: any;
  params: any;
  cellEditorParams: {
    valueField: '', // TODO: implement
    labelField: '', // TODO: implement
    endpoint: '',
  }
  timerId: any;
  value: any;

  options: any[];
  filteredOptions: any[];

  constructor(private http: HttpClient) {}

  @ViewChild("input", { read: ViewContainerRef }) public input: any;

  agInit(params: any): void {
    const {valueField, labelField, endpoint} = params;
    this.cellEditorParams = {valueField, labelField, endpoint};
    this.gridApi = params.api;
    this.initValue = params.value;
    this.params = params;
    this.setInitialState(this.params);
    this.http.get(this.cellEditorParams.endpoint).subscribe((data: any) => {
      this.options = data;
      this.filteredOptions = data;
    });
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
    console.log(this.value);
    return this.value !== this.initValue
      ? this.value[this.params.valueField]
      : this.initValue;
  }

  filter = () => {
    if (this.value?.length > 1)
      this.filteredOptions = this.options.filter((o) =>
        o[this.params.labelField].toLowerCase().includes(this.value)
      );
    else this.filteredOptions = this.options;
  };

  onKeyUp(event: any): void {
    const shouldReturn = this.customKeyHandler(event);
    if (shouldReturn) return;

    this.value = event.target.value;
    this._debounceFunction(this.filter, 250);
  }

  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  ngAfterViewInit() {
    window.setTimeout(() => {
      this.input.element.nativeElement.focus();
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

  onOptionSelected(event) {
    this.value = event.option.value;
    this.gridApi.tabToNextCell();
  }

  displayFn(obj: any): string {
    console.log(obj);
    return obj[this.params.labelField];
  }

  private _debounceFunction = (func, delay) => {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(func, delay);
  };
}
