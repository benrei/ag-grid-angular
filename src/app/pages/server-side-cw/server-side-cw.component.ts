import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  CellValueChangedEvent,
  IServerSideDatasource
} from "ag-grid-community/main";
import { SelectBoxEditor } from "../../grid/editors/select-box-editor/select-box-editor.component";
import { DatepickerEditor } from "../../grid/editors/datepicker-editor/datepicker-editor.component";
import columns from "./columns";
import "ag-grid-enterprise";
import { FakeServer } from "../../fakeServer";
import utils from "../../grid/utils";
import { colDefDefaults, gridOptions } from "../../grid/defaults";

@Component({
  selector: "app-server-side-cw",
  templateUrl: "./server-side-cw.component.html",
  styleUrls: ["./server-side-cw.component.css"]
})
export class ServerSideCwComponent {
  gridApi;
  gridColumnApi;
  rowData;
  columnDefs = columns;
  gridOptions = {
    ...gridOptions,
    frameworkComponents: {
      selectBoxEditor: SelectBoxEditor,
      datepickerEditor: DatepickerEditor
    }
    // undoRedoCellEditing: true
  };
  defaultColDef = {
    ...colDefDefaults,
    onCellValueChanged: this.onCellValueChanged.bind(this),
    editable: true
  };

  constructor(private http: HttpClient) {}

  onCellValueChanged(event: CellValueChangedEvent) {
    console.log(event);
    // this.gridApi.purgeServerSideCache(utils.getGroupRoute(event.node));
    // Save changes
  }

  addFn = () => {
    console.log("addFn");
  };
  editFn = () => {
    const { rowIndex } = this.gridApi.getFocusedCell();
    const rowNode = this.gridApi.getDisplayedRowAtIndex(rowIndex);
    console.log(rowNode);
    console.log(this.gridApi.getSelectedNodes());
    let updated = JSON.parse(JSON.stringify(rowNode.data));
    updated.gold = Math.floor(Math.random() * 10);
    updated.silver = Math.floor(Math.random() * 10);
    updated.bronze = Math.floor(Math.random() * 10);
    const res = rowNode.setData(updated);
    console.log(res);
    this.gridApi.refreshCells({ rowNodes: [rowNode] });
    // this.gridApi.flashCells({
    //   rowNodes: [rowNode]
    //   // flashDelay: 20000000
    // });
    console.log("editFn");
  };
  deleteFn = () => {
    console.log("deleteFn");
  };
  refreshFn = () => {
    console.log("refreshFn");
  };
  setQuickfilterText(text) {
    this.gridApi.setQuickFilter(text);
  }

  resetFn = () => this.gridColumnApi.resetColumnState();
  fitColumnsFn = () => this.gridApi.sizeColumnsToFit();

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    var fakeServer = createFakeServer();
    var datasource = createServerSideDatasource(fakeServer);
    console.log(datasource)
    params.api.setServerSideDatasource(datasource);
  }
}

function createServerSideDatasource(server) {
  return {
    getRows: function(params) {
      console.log("[Datasource] - rows requested by grid: ", params.request);
      var response = server.getData(params.request);
      setTimeout(function() {
        if (response.success) {
          params.successCallback(response.rows, response.lastRow);
        } else {
          params.failCallback();
        }
      }, 500);
    }
  };
}
function createFakeServer() {
  const URL =
    "https://contracting-test-clientapi-aggrid.azurewebsites.net/client/a-anonymisert/Rows/GetRows";
  const options = {
    headers: {
      Authorization: localStorage.token
    }
  };
  return {
    getData: async request => {
      var result = await this.http.post(URL, request, options);
      return {
        success: true,
        rows: result.data,
        lastRow: result.lastRow
      };
    }
  };
}

function ServerSideDatasource(): IServerSideDatasource {
  return {
    getRows: function(params) {
      console.log("Request");
      console.log(params.request);
      const URL =
        "https://contracting-test-clientapi-aggrid.azurewebsites.net/client/a-anonymisert/Rows/GetRows";
      const options = {
        headers: {
          Authorization: localStorage.token
        }
      };
      this.http.post(URL, params.request, options).subscribe(response => {
        if (response.success) {
          params.successCallback(response.rows, response.lastRow);
        } else {
          params.failCallback();
        }
      });
    }
  };
}
