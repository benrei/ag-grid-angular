import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "error-cell",
  template: `
    <div
      style="color: rgb(255 0 0 / 0.2);"
      matTooltip="{{ params.data.country }}"
    >
      {{ value }}
    </div>
  `
})
export class ErrorRenderer implements ICellRendererAngularComp {
  public params;
  public value;

  agInit(params: any): void {
    this.params = params;
    this.value = params.value;
  }

  refresh(): boolean {
    return false;
  }
}
