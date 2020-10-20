import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { CwGridHeaderComponent } from "../../cw-grid/cw-grid-header/cw-grid-header.component";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent {
  gridApi;
  gridColumnApi;
  defaultColDef;
  columnDefs;

  rowData: any;

  constructor(private http: HttpClient) {
    this.defaultColDef = { resizable: true };
    this.columnDefs = [
      { field: "make", sortable: true, filter: true },
      { field: "model", sortable: true, filter: true },
      { field: "price", sortable: true, filter: true }
    ];
  }

  addFn() {
    console.log("addFn");
  }
  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    console.log(params);
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
