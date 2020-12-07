import { Component } from "@angular/core";
import { CellValueChangedEvent } from "ag-grid-community/main";
import columns from "./columns";
import utils from "../../grid/utils";
import { DatepickerEditor } from "src/app/grid/cellEditors/datepicker-editor/datepicker-editor.component";
import { SelectBoxEditor } from "src/app/grid/cellEditors/select-box-editor/select-box-editor.component";
import gridOptions from "src/app/grid/defaults/gridOptions";
import colDefDefaults from "src/app/grid/defaults/colDefDefaults";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-simple",
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
      datepickerEditor: DatepickerEditor
    },
    getContextMenuItems: utils.client.getContextMenuItems,
    undoRedoCellEditing: true
    // editType: "fullRow"
  };
  defaultColDef = {
    ...colDefDefaults,
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
    console.log("addFn");
  };
  editFn = () => {
    console.log("editFn");
  };
  deleteFn = () => {
    const rowNodes = this.gridApi.getSelectedRows();
    utils.client.removeRows(this.gridApi, rowNodes);
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
      .subscribe((data) => {
        this.rowData = data;
      });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getData();
  }
}
