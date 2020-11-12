import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { gridOptionsDefaults, colDefDefaults } from "../../grid/gridDefaults";
import { PdfIconRenderer } from "../../grid/frameworkComponents/pdf-icon-renderer.component";
import { CellValueChangedEvent } from "ag-grid-community/main";
import { SelectBoxEditor } from "../../grid/editors/select-box-editor/select-box-editor.component";

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
      pdfIconRenderer: PdfIconRenderer,
      selectBoxEditor: SelectBoxEditor
    },
    undoRedoCellEditing: true
  };
  defaultColDef = {
    ...colDefDefaults,
    onCellValueChanged: this.onCellValueChanged,
    editable: true
  };
  columnDefs = [
    // {
    //   field: "country",
    //   filter: "agTextColumnFilter",
    //   cellEditor: "agSelectCellEditor",
    //   cellEditorParams: () => {
    //     const contries = this.rowData.map(e => e.country);
    //     console.log(Array.from(new Set(contries)).sort());
    //     return { values: Array.from(new Set(contries)).sort() };
    //   },
    //   minWidth: 150
    // },
    {
      field: "country",
      filter: "agTextColumnFilter",
      minWidth: 150,
      cellEditor: "selectBoxEditor",
      cellEditorParams: () => {
        const contries = this.rowData.map(e => e.country);
        console.log(Array.from(new Set(contries)).sort());
        return { values: Array.from(new Set(contries)).sort() };
      }
    },
    { field: "year", filter: "agNumberColumnFilter", minWidth: 150 },
    { field: "sport", filter: "agTextColumnFilter", minWidth: 150 },
    {
      field: "athlete",
      filter: "agTextColumnFilter",
      minWidth: 150
    },
    { field: "gold", filter: "agNumberColumnFilter" },
    { field: "silver", filter: "agNumberColumnFilter" },
    { field: "bronze", filter: "agNumberColumnFilter" },
    { field: "total", filter: "agNumberColumnFilter" },
    { field: "age", filter: "agNumberColumnFilter" },
    { field: "date", filter: "agDateColumnFilter", minWidth: 140 }
  ];

  constructor(private http: HttpClient) {}

  onCellValueChanged(event: CellValueChangedEvent) {
    console.log(event);
    // Save changes
  }

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
