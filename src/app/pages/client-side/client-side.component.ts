import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import "ag-grid-enterprise";
import { CellValueChangedEvent } from "ag-grid-community";
import { SelectBoxEditor } from "../../ag-grid-extention/components/cell-editors/select-box-editor/select-box-editor.component";
import { ErrorRenderer } from "../../ag-grid-extention/components/cell-renderers/error-renderer.component";
import contextMenu from "../../ag-grid-extention/contextMenus";
import gridOptions from "../../ag-grid-extention/gridOptions";
import colDefDefaults from "../../ag-grid-extention/gridOptions/colDefDefaults";
import utils from "../../ag-grid-extention/utils";
import columns from "./columns";

@Component({
  selector: "app-client-side",
  templateUrl: "./client-side.component.html",
  styleUrls: ["./client-side.component.css"]
})
export class ClientSideComponent {
  gridApi;
  gridColumnApi;
  rowData;
  gridOptions = {
    ...gridOptions,
    frameworkComponents: {
      selectBoxEditor: SelectBoxEditor,
      errorRenderer: ErrorRenderer
    },
    getContextMenuItems: contextMenu,
    undoRedoCellEditing: true
    // editType: "fullRow"
  };
  defaultColDef = {
    ...colDefDefaults,
    cellRendererSelector: ({ data, value }) =>
      value === 0 ? { component: "errorRenderer" } : null,
    onCellValueChanged: this.onCellValueChanged,
    editable: true
  };
  columnDefs = columns;
  constructor(private http: HttpClient) {}

  onCellValueChanged(event: CellValueChangedEvent) {
    console.log(event);
    // Save changes
  }
  addFn = () => {
    utils.addRow(this.gridApi, {}, 0);
  };
  editFn = () => {
    console.log("editFn");
  };
  deleteFn = () => {
    const rowNodes = this.gridApi.getSelectedRows();
    utils.removeRows(this.gridApi, rowNodes);
  };
  refreshFn = () => {
    console.log("refreshFn");
  };
  setQuickfilterText(text) {
    this.gridApi.setQuickFilter(text);
  }
  resetFn = () => this.gridColumnApi.resetColumnState();
  fitColumnsFn = () => this.gridApi.sizeColumnsToFit();
  getData() {
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
