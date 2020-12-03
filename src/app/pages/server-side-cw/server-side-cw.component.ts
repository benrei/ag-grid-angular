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
import { colDefDefaults, gridOptions } from "../../grid/defaults";
import { unflatten } from "../../utils";

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
    let updated = JSON.parse(JSON.stringify(rowNode.data));
    rowNode.setData(updated);
    // this.gridApi.refreshCells({ rowNodes: [rowNode] });
    this.gridApi.flashCells({ rowNodes: [rowNode] });
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
    var datasource = createServerSideDatasource(this.http, "services");
    console.log(datasource);
    params.api.setServerSideDatasource(datasource);
  }
}

function createServerSideDatasource(http: HttpClient, table: string) {
  return {
    getRows: function(params) {
      // console.log("[Datasource] - rows requested by grid: ", params.request);
      const cols = params.columnApi
        .getAllColumns()
        .map(o => o.userProvidedColDef)
        .filter(o => o.field)
        .map(o => {
          return { field: o.field };
        });
      params.request.table = table;
      params.request.cols = cols;

      const URL =
        "https://contracting-test-clientapi-aggrid.azurewebsites.net/client/a-anonymisert/Rows/GetRows";
      const options = {
        headers: {
          Authorization: localStorage.token
        }
      };
      http.post(URL, params.request, options).subscribe((response: any) => {
        if (response.data) {
          const data = response.data.map(obj => unflatten(obj));
          params.successCallback(data, response.lastRow);
        } else {
          params.failCallback();
        }
      });
    }
  };
}
