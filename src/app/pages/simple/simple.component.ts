import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent {
  gridApi;
  gridColumnApi;
  defaultColDef;
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
  sizeToFit = () => {
    this.gridApi.sizeColumnsToFit();
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
