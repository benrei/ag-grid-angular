import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "error-cell",
  template: `
    <div style="color: rgb(255 0 0 / 0.2);" [matTooltip]="text">
      {{ value }}
    </div>
  `
})
export class ErrorRenderer implements ICellRendererAngularComp {
  public params;
  public value;
  public text;

  agInit(params: any): void {
    this.params = params;
    this.value = params.value;
    this.text = `${params.data.country} only has ${
      params.value
    } silver medals!`;
  }

  refresh(): boolean {
    return false;
  }
}
