import { Directive, ElementRef, HostListener } from "@angular/core";
import { AgGridEvent } from "ag-grid-community/main";

@Directive({
  selector: "ag-grid-angular"
})
export class GridDirective {
  constructor() {}

  @HostListener("filterChanged", ["$event"])
  @HostListener("toolPanelVisibleChanged", ["$event"])
  @HostListener("displayedColumnsChanged", ["$event"])
  @HostListener("sortChanged", ["$event"])
  @HostListener("columnResized", ["$event"])
  onGridEvent(event: AgGridEvent) {
    console.log(event.type);
  }
}
