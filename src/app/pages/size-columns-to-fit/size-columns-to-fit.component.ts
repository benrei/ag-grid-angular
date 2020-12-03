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
    { headerName: "Customer Name", field: "customer.name" },
    { headerName: "Model", field: "model" }
  ];

  rowData = [
    {
      make: "Foo",
      "customer.name": "Customer Name 1",
      model: "Bar"
    },
    {
      make: "Foo2",
      "customer.name": "Customer Name 1",
      model: "Baar2"
    },
    {
      make: "Foo3",
      "customer.name": "Customer Name 1",
      model: "Bar3"
    }
  ];

  gridReadyCallback(event) {
    this.gridApi = event.api;
    // this.gridApi.sizeColumnsToFit();
  }

  onclickme(event) {
    this.gridApi.sizeColumnsToFit();
  }
}
