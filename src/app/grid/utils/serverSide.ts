import { HttpClient } from "@angular/common/http";
import {
  ColDef,
  ColumnApi,
  IServerSideDatasource,
  IServerSideGetRowsParams
} from "ag-grid-community";
import { unflatten } from "../../utils";

const server = {
  addRow: (api, data, rowIndex = 0) => {
    console.log("addRow");
  },
  addRows: (api, data = [], rowIndex = 0) => {},
  editRow: (api, data, rowIndex = 0) => {},
  editRows: (api, data = [], rowIndex = 0) => {},
  removeRow: (api, data, rowIndex = 0) => {},
  removeRows: (api, data, rowIndex = 0) => {}
};

const getRequestCols = (columnApi: any) => {
  return columnApi
    .getAllColumns()
    .map(o => o.userProvidedColDef)
    .filter(o => o.field)
    .map(o => {
      return { field: o.field };
    });
};

const createDatasource = (
  http: HttpClient,
  table: string
): IServerSideDatasource => {
  return {
    getRows: function(params: any) {
      params.request.cols = getRequestCols(params.columnApi);
      params.request.table = table;

      const URL =
        "https://contracting-test-clientapi-aggrid.azurewebsites.net/client/a-anonymisert/Rows/GetRows";
      const options = {
        headers: {
          Authorization: localStorage.token
        }
      };
      http
        .post(URL, params.request, options)
        .toPromise()
        .then((response: any) => {
          if (response.data) {
            const data = response.data.map(obj => unflatten(obj));
            params.successCallback(data, response.lastRow);
          } else {
            params.failCallback();
          }
        });
    }
  };
};
export default { ...server, createDatasource };
