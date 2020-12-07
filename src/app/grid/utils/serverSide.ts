import { HttpClient } from "@angular/common/http";
import { IServerSideDatasource } from "ag-grid-community";
import utils from ".";

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

const getRequestCols = (columnApi: any) =>
  columnApi
    .getAllColumns()
    .map((o) => o.userProvidedColDef)
    .filter((o) => o.field)
    .map((o) => {
      return { field: o.field };
    });

const createDatasource = (
  http: HttpClient,
  table: string
): IServerSideDatasource => {
  return {
    getRows: function (params: any) {
      console.log(params.request);
      params.request.table = table;
      params.request.cols = getRequestCols(params.columnApi);

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
            const data = utils.unflattenMany(response.data);
            params.successCallback(data, response.lastRow);
          } else {
            params.failCallback();
          }
        });
    }
  };
};
export default { ...server, createDatasource };
