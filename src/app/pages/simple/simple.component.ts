import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import defaultGridOptions from "../../grid/defaultGridOptions";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent {
  gridApi;
  gridColumnApi;
  gridOptions = defaultGridOptions;
  columnDefs = [
    { field: "make", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true }
  ];
  rowData;

  constructor(private http: HttpClient) {}

  addFn() {
    console.log("addFn");
  }
  resetFn = () => {
    // this.gridApi.sizeColumnsToFit();
    this.gridColumnApi.resetColumnState();
  };

  onSortChanged(event) {}

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json"
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }
}
