import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { gridOptionsDefaults, colDefDefaults } from "../../grid/gridDefaults";
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
    ...gridOptionsDefaults,
    frameworkComponents: {
      pdfIconRenderer: PdfIconRenderer
    },
    undoRedoCellEditing: true
  };
  defaultColDef = {
    ...colDefDefaults,
    editable: true
  };
  columnDefs = [
    { field: "country" },
    { field: "year" },
    {
      field: "sport",
      minWidth: 200
    },
    {
      field: "athlete",
      minWidth: 200
    },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
    { field: "age" },
    {
      field: "date",
      minWidth: 140
    }
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
  setQuickfilterText(text) {
    this.gridApi.setQuickFilter(text);
  }

  resetFn = () => this.gridColumnApi.resetColumnState();
  fitColumnsFn = () => this.gridApi.sizeColumnsToFit();

  getData() {
    // .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json")
    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json"
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
