import { Directive, HostListener, Self } from "@angular/core";
import { AgGridEvent } from "ag-grid-community/main";
import { AgGridAngular } from "ag-grid-angular";

@Directive({
  selector: "ag-grid-angular"
})
export class GridDirective {
  constructor(@Self() private agGrid: AgGridAngular) {}

  @HostListener("gridReady", ["$event"])
  onGridReady(event: AgGridEvent) {
    console.log(event.type);
    //  Even this works!
    this.agGrid.api.sizeColumnsToFit();
  }

  @HostListener("filterChanged", ["$event"])
  @HostListener("toolPanelVisibleChanged", ["$event"])
  @HostListener("displayedColumnsChanged", ["$event"])
  @HostListener("sortChanged", ["$event"])
  @HostListener("columnResized", ["$event"])
  onGridEvent(event: AgGridEvent) {
    console.log(event.type);
  }
}