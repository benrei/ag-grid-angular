import { Component } from "@angular/core";
import { CellValueChangedEvent } from "ag-grid-community/main";
import columns from "./columns";
import "ag-grid-enterprise";
import { DatepickerEditor } from "../../grid/cellEditors/datepicker-editor/datepicker-editor.component";
import { SelectBoxEditor } from "../../grid/cellEditors/select-box-editor/select-box-editor.component";
import colDefDefaults from "../../grid/defaults/colDefDefaults";
import gridOptions from "../../grid/gridOptions";
import { DataCWService } from "../../services/dataCW.service";

@Component({
  selector: "app-server-side-cw",
  templateUrl: "./server-side-cw.component.html",
  styleUrls: ["./server-side-cw.component.css"]
})
export class ServerSideCwComponent {
  gridApi;
  gridColumnApi;
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

  constructor(private dataService: DataCWService) {}

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // const datasource = utils.server.createDatasource(this.http, "services");
    const datasource = this.dataService.createDatasource("services");
    params.api.setServerSideDatasource(datasource);
  }

  onCellValueChanged(event: CellValueChangedEvent) {
    console.log(event);
  }

  setQuickfilterText(text) {
    this.gridApi.setQuickFilter(text);
  }
  addFn = () => {
    console.log("addFn");
  };
  editFn = () => {
    console.log("editFn");
    // const { rowIndex } = this.gridApi.getFocusedCell();
    // const rowNode = this.gridApi.getDisplayedRowAtIndex(rowIndex);
    // let updated = JSON.parse(JSON.stringify(rowNode.data));
    // rowNode.setData(updated);
    // // this.gridApi.refreshCells({ rowNodes: [rowNode] });
    // this.gridApi.flashCells({ rowNodes: [rowNode] });
  };
  deleteFn = () => {
    console.log("deleteFn");
  };
  refreshFn = () => {
    console.log("refreshFn");
  };
  resetFn = () => this.gridColumnApi.resetColumnState();
  fitColumnsFn = () => this.gridApi.sizeColumnsToFit();
}
