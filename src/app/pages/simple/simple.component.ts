import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private autoGroupColumnDef;
  private rowData: [];

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: "country",
        rowGroup: true,
        hide: true
      },
      {
        field: "year",
        rowGroup: true,
        hide: true
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
      flex: 1,
      minWidth: 100,
      filter: true,
      sortable: true,
      resizable: true
    };
    this.autoGroupColumnDef = { minWidth: 200 };
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
