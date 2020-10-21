import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-size-columns-to-fit",
  templateUrl: "./size-columns-to-fit.component.html",
  styleUrls: ["./size-columns-to-fit.component.css"]
})
export class SizeColumnsToFitComponent {
  gridApi;
  columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" }
  ];

  rowData = [
    {
      make: "Foo",
      model: "Bar"
    },
    {
      make: "Foo2",
      model: "Baar2"
    },
    {
      make: "Foo3",
      model: "Bar3"
    }
  ];

  gridReadyCallback(event) {
    this.gridApi = event.api;
    this.gridApi.sizeColumnsToFit();
  }

  onclickme(event) {
    this.gridApi.sizeColumnsToFit();
  }
}
