import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "error-cell",
  template: `
    <div [matTooltip]="text">
      {{ value }}
    </div>
  `,
  styles: [
    `
      div {
        // color: rgb(255 0 0 / 1);
        background: rgb(255 0 0 / 0.1);
      }
    `
  ]
})
export class ErrorRenderer implements ICellRendererAngularComp {
  public params;
  public value;
  public text;

  agInit(params: any): void {
    const { api, colDef, data, value } = params;
    this.params = params;
    this.value = value;
    this.text = `${data.country} only has ${value} ${colDef.headerName ||
      colDef.field} medals!`;
  }

  refresh(): boolean {
    return false;
  }
}
