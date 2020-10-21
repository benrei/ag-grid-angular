import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
@Component({
  selector: "app-row-group",
  templateUrl: "./row-group.component.html",
  styleUrls: ["./row-group.component.css"]
})
export class RowGroupComponent {
  private gridApi;
  private gridColumnApi;

  columnDefs;
  defaultColDef;
  autoGroupColumnDef;
  rowData;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: "country"
      },
      {
        field: "year"
      },
      {
        field: "sport",
        minWidth: 200
      },
      {
        field: "athlete",
        minWidth: 200
      },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
      { field: "total" },
      { field: "age" },
      {
        field: "date",
        minWidth: 140
      }
    ];
    this.defaultColDef = {
      enableRowGroup: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      sortable: true,
      resizable: true
    };
    this.autoGroupColumnDef = {
      minWidth: 150
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json"
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }
}
