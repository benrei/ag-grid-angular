import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PdfIconRenderer } from "../../grid/frameworkComponents/pdf-icon-renderer.component";
import {
  CellValueChangedEvent,
  IServerSideDatasource
} from "ag-grid-community/main";
import { SelectBoxEditor } from "../../grid/editors/select-box-editor/select-box-editor.component";
import { DatepickerEditor } from "../../grid/editors/datepicker-editor/datepicker-editor.component";
import { NgSelectBoxEditor } from "../../grid/editors/ng-select-box/ng-select-box-editor.component";
import buildColumns from "./columns";
import "ag-grid-enterprise";
import { FakeServer } from "../../fakeServer";
import utils from "../../grid/utils";
import { colDefDefaults, gridOptions } from "../../grid/defaults";
declare const window: any;

@Component({
  selector: "app-server-side",
  templateUrl: "./server-side.component.html",
  styleUrls: ["./server-side.component.css"]
})
export class ServerSideComponent {
  gridApi;
  gridColumnApi;
  rowData;
  columnDefs;
  gridOptions = {
    ...gridOptions,
    frameworkComponents: {
      pdfIconRenderer: PdfIconRenderer,
      ngSelectBoxEditor: NgSelectBoxEditor,
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
    //console.log(event);
    this.gridApi.purgeServerSideCache(utils.getGroupRoute(event.node));
    // Save changes
  }

  addFn = () => {
    console.log("addFn");
  };
  editFn = () => {
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

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json"
      )
      .subscribe(data => {
        var fakeServer = FakeServer(data);
        this.columnDefs = buildColumns(data);
        var datasource = ServerSideDatasource(fakeServer);
        params.api.setServerSideDatasource(datasource);
      });
  }
}

function ServerSideDatasource(server): IServerSideDatasource {
  return {
    getRows: function(params) {
      console.log("Request");
      console.log(params.request);
      var response = server.getData(params.request);
      setTimeout(function() {
        if (response.success) {
          params.successCallback(response.rows, response.lastRow);
        } else {
          params.failCallback();
        }
      }, 200);
    }
  };
}
