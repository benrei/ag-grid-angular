import { Component, OnInit } from "@angular/core";

const buildFlatRowData = count => {
  let array = [];
  for (let i = 0; i < count; i++) {
    array.push({
      make: "Foo " + i,
      "customer.name": "Customer Name " + i,
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

  rowData = covertArrayOfFlatObjectToDeep(buildFlatRowData(1000));

  gridReadyCallback(event) {
    this.gridApi = event.api;
    console.log(this.rowData);
    // this.gridApi.sizeColumnsToFit();
  }

  onclickme(event) {
    this.gridApi.sizeColumnsToFit();
  }
}
const addValueToObj = (obj: any, nestedKeys: Array<string>, value: string) => {
  const lastKeyIndex = nestedKeys.length - 1;
  for (let i = 0; i < lastKeyIndex; i++) {
    const key = nestedKeys[i];
    if (!(key in obj)) {
      obj[key] = {};
    }
    obj = obj[key];
  }
  obj[nestedKeys[lastKeyIndex]] = value;
};

const convertArrayToObject = (arr: Array<any>): any => {
  return arr.reduce((obj, currItem) => {
    if (!(currItem.id === null || currItem.id === undefined)) {
      const nestedKeys = currItem.id.split(".");
      addValueToObj(obj, nestedKeys, currItem.value);
    }
    return obj;
  }, {});
};

const convertFlatObjectToDeep = (obj: any): any => {
  const array: Array<any> = [];
  for (const key of Object.keys(obj)) {
    array.push({ id: key, value: obj[key] });
  }

  return convertArrayToObject(array);
};

const covertArrayOfFlatObjectToDeep = objects => objects.map(obj => convertFlatObjectToDeep(obj));
