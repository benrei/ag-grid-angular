import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { gridOptionsDefaults, colDefDefaults } from "../../grid/gridDefaults";
import { PdfIconRenderer } from "../../grid/frameworkComponents/pdf-icon-renderer.component";
import { CellValueChangedEvent } from "ag-grid-community/main";
import assignments from "./assignments.json";
import wageCodes from "./wagecodes.json";
import utils from "../../grid/utils";

@Component({
  selector: "app-time-registration",
  templateUrl: "./time-registration.component.html",
  styleUrls: ["./time-registration.component.css"]
})
export class TimeRegistrationComponent {
  grid;
  gridApi;
  gridColumnApi;
  rowData;
  gridOptions = {
    ...gridOptionsDefaults,
    frameworkComponents: {
      pdfIconRenderer: PdfIconRenderer
    },
    undoRedoCellEditing: true,
    navigateToNextCell:
      utils.gridOptions.navigateToNextCell.selectionWithArrowKeys
  };
  defaultColDef = {
    ...colDefDefaults,
    enableCellChangeFlash: true,
    onCellValueChanged: this.onCellValueChanged,
    editable: true
  };
  assignments = assignments;
  wageCodes = wageCodes;
  columnDefs = [
    {
      field: "assignment.assignmentNumber",
      filter: "agNumberColumnFilter",
      sort: "asc"
    },
    { field: "startDateTimeUTC", filter: "agDateColumnFilter" },
    {
      field: "wageCode.combined_WageCodeNumber_WageCodeName",
      filter: "agTextColumnFilter"
    },
    { field: "serviceComment", filter: "agTextColumnFilter" },
    {
      field: "quantity",
      filter: "agNumberColumnFilter",
      type: "numericColumn"
    },
    {
      field: "costPrice",
      filter: "agNumberColumnFilter",
      type: "numericColumn"
    },
    {
      headerName: "Beløp",
      valueGetter: "data.quantity * data.costPrice",
      editable: false,
      // cellRenderer: params => params.data.quantity * params.data.costPrice,
      type: "numericColumn",
      valueFormatter:
        'value.toFixed(2).replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1 ")'
    }
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
        "https://raw.githubusercontent.com/benrei/ag-grid-angular/master/src/app/pages/time-registration/services.json"
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }

  onGridReady(params) {
    this.grid = params;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getData();
  }
}
