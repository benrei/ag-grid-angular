import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { IServerSideGetRowsParams } from "ag-grid-community";
import { colDefDefaults, gridOptions } from "../../grid/defaults";
import columns from "./columns";
import data from "./data";

@Component({
  selector: "app-server-side-nested",
  templateUrl: "./server-side-nested.component.html",
  styleUrls: ["./server-side-nested.component.css"]
})
export class ServerSideNestedComponent {
  grid;
  gridApi;
  gridColumnApi;
  gridOptions = {
    ...gridOptions,
    frameworkComponents: {},
    undoRedoCellEditing: true
  };
  defaultColDef = {
    ...colDefDefaults,
    onCellValueChanged: this.onCellValueChanged.bind(this),
    editable: true
  };
  columnDefs = columns;

  constructor(private http: HttpClient) {}

  onCellValueChanged(event) {
    console.log(event);
    // Save changes
  }

  addFn = () => {
    console.log("addFn");
  };
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

  onGridReady(params) {
    this.grid = params;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const datasource = createDatasource(data);
    setTimeout(() => {
      params.api.setServerSideDatasource(datasource);
    }, 100);
  }
}
function createDatasource(rows) {
  return {
    // called by the grid when more rows are required
    getRows: function(params: IServerSideGetRowsParams) {
      // get data for request from server
      console.log(params.request);
      if (true) {
        // supply rows for requested block to grid
        params.successCallback(rows, -1);
      } else {
        // inform grid request failed
        params.failCallback();
      }
    }
  };
}
