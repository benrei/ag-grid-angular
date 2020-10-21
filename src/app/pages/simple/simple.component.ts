import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import defaultGridOptions from "../../grid/defaultGridOptions";
import { PdfIconRenderer } from "../../grid/frameworkComponents/pdf-icon-renderer.component";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent {
  gridApi;
  gridColumnApi;
  rowData;
  gridOptions = {
    ...defaultGridOptions,
    frameworkComponents: {
      pdfIconRenderer: PdfIconRenderer
    }
  };
  columnDefs = [
    { field: "make", filter: true },
    { field: "model", filter: true },
    { field: "model", cellRenderer: "pdfIconRenderer" },
    { field: "price", filter: true }
  ];

  constructor(private http: HttpClient) {}

  addFn() {
    console.log("addFn");
  }
  editFn() {
    console.log("editFn");
  }
  deleteFn() {
    console.log("deleteFn");
  }
  refreshFn() {
    console.log("refreshFn");
  }

  resetFn = () => this.gridColumnApi.resetColumnState();
  fitColumnsFn = () => this.gridApi.sizeColumnsToFit();

  getData() {
    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json"
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getData();
  }
}
