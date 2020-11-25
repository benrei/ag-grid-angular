import { Directive, HostListener, Self } from "@angular/core";
import { AgGridEvent, CellValueChangedEvent } from "ag-grid-community/main";
import { AgGridAngular } from "ag-grid-angular";
import utils from "./utils";

@Directive({
  selector: "ag-grid-angular"
})
export class GridDirective {
  constructor(@Self() private agGrid: AgGridAngular) {}

  @HostListener("gridReady", ["$event"])
  onGridReady(event: AgGridEvent) {
    console.log(event.type);
    // Even this works!
    // this.agGrid.api.sizeColumnsToFit();
  }

  @HostListener("cellFocused", ["$event"])
  onCellFocusedd(event) {
    const { api, rowIndex } = event;
    api.getDisplayedRowAtIndex(rowIndex)?.setSelected(true);
  }

  @HostListener("cellValueChanged", ["$event"])
  onCellValueChanged(event: CellValueChangedEvent) {
    const { colDef, node } = event;
    // console.log(event);
    event.api.flashCells({
      rowNodes: [node],
      columns: [colDef.field]
    });
    // setTimeout(() => {
    // }, 1000);
  }

  @HostListener("filterChanged", ["$event"])
  @HostListener("toolPanelVisibleChanged", ["$event"])
  @HostListener("displayedColumnsChanged", ["$event"])
  @HostListener("sortChanged", ["$event"])
  @HostListener("columnResized", ["$event"])
  @HostListener("firstDataRendered", ["$event"])
  onGridEvent(event: AgGridEvent) {
    console.log(event.type);
  }
}
