import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "currency-cell",
  template: `
    <a *ngIf="url" href="{{ url }}" target="_blank">
      <mat-icon>picture_as_pdf</mat-icon>
    </a>
  `
})
export class PdfIconRenderer implements ICellRendererAngularComp {
  public url: string;

  agInit(params: any): void {
    this.url = params.value;
  }

  refresh(): boolean {
    return false;
  }
}
