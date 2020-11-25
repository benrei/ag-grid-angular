import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { gridOptionsDefaults, colDefDefaults } from "../../grid/gridDefaults";
import { PdfIconRenderer } from "../../grid/frameworkComponents/pdf-icon-renderer.component";
import { CellValueChangedEvent } from "ag-grid-community/main";
import { SelectBoxEditor } from "../../grid/editors/select-box-editor/select-box-editor.component";
import { DatepickerEditor } from "../../grid/editors/datepicker-editor/datepicker-editor.component";
import { NgSelectBoxEditor } from "../../grid/editors/ng-select-box/ng-select-box-editor.component";
import buildColumns from "./columns";
import "ag-grid-enterprise";

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
    ...gridOptionsDefaults,
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
    onCellValueChanged: this.onCellValueChanged,
    editable: true
  };

  constructor(private http: HttpClient) {}

  onCellValueChanged(event: CellValueChangedEvent) {
    console.log(event);
    // Save changes
  }

  addFn() {
    var selectedRows = this.gridApi.getSelectedNodes();
    if (!selectedRows || selectedRows.length === 0) {
      return;
    }
    var selectedRow = selectedRows[0];
    // window.rowDataServerSide.splice(selectedRow.rowIndex, 0, {
    //   athlete: "New Item" + newItemCount
    // });
    newItemCount++;
    this.gridApi.purgeServerSideCache();
  }
  editFn() {
    console.log("editFn");
  }
  deleteFn() {
    console.log("deleteFn");
    var selectedRows = this.gridApi.getSelectedNodes();
    if (!selectedRows || selectedRows.length === 0) {
      return;
    }
    var selectedRow = selectedRows[0];
    // window.rowDataServerSide.splice(selectedRow.rowIndex, 1);
    this.gridApi.purgeServerSideCache();
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
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json"
      )
      .subscribe(data => {
        var datasource = createMyDataSource(data);
        params.api.setServerSideDatasource(datasource);
      });
  }
}

var newItemCount = 0;
function createMyDataSource(data) {
  // window.rowDataServerSide = data;
  function MyDatasource() {}
  MyDatasource.prototype.getRows = function(params) {
    var rowsThisPage = data.slice(
      params.request.startRow,
      params.request.endRow
    );
    // params.successCallback(rowsThisPage, window.rowDataServerSide.length);
  };
  return new MyDatasource();
}
