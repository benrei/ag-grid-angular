import { Directive, ElementRef, HostListener } from "@angular/core";

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
  onGridEvent(event) {
    console.log(event.type);
  }
}
