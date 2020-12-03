import { Component, OnInit } from "@angular/core";
import { unflatten } from "../../utils";

const buildFlatRowData = count => {
  let array = [];
  for (let i = 0; i < count; i++) {
    array.push({
      make: "Foo " + i,
      "customer.name": "Customer Name " + i,
      "customer.0.name": "Customer Name " + i,
      model: "Bar " + i
    });
  }
  return array;
};

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

  rowData = buildFlatRowData(1000).map(obj => unflatten(obj));
  // rowData = [];

  gridReadyCallback(event) {
    this.gridApi = event.api;
    console.log(this.rowData);
  }

  onclickme(event) {
    this.gridApi.sizeColumnsToFit();
  }
}
