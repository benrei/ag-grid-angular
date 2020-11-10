import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { gridOptionsDefaults, colDefDefaults } from "../../grid/gridDefaults";
import assignments from "./assignments.json";
import wageCodes from "./wagecodes.json";
import utils from "../../grid/utils";
import helpers from "./helpers";

@Component({
  selector: "app-time-registration",
  templateUrl: "./time-registration.component.html",
  styleUrls: ["./time-registration.component.css"]
})
export class TimeRegistrationComponent {
  grid;
  gridApi;
  gridColumnApi;
  rowData: Array<any>;
  gridOptions = {
    ...gridOptionsDefaults,
    undoRedoCellEditing: true
  };
  defaultColDef = {
    ...colDefDefaults,
    onCellValueChanged: this.onCellValueChanged.bind(this),
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
      filter: "agNumberColumnFilter",
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

  onCellValueChanged(event) {
    console.log(event);
    // const rows = JSON.parse(JSON.stringify([event.data, event.data]));
    // const res = event.api.applyTransaction({
    //   add: rows,
    //   addIndex: -1
    // });
    // console.log(res);
    // event.api.flashCells({
    //   rowNodes: res.add,
    //   flashDelay: 2000,
    //   fadeDelay: 3000,
    // });

    // Save changes
  }

  addFn = () => {
    console.log("addFn");
    const result = this.gridApi.applyTransaction({
      add: helpers.createObjects(),
      addIndex: -1
    });
    this.gridApi.flashCells({
      flashDelay: 2000,
      fadeDelay: 3000,
      rowNodes: result.add
    });
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

  getData() {
    this.http
      .get(
        "https://raw.githubusercontent.com/benrei/ag-grid-angular/master/src/app/pages/time-registration/services.json"
      )
      .toPromise()
      .then((data: Array<any>) => {
        console.log(data);
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
