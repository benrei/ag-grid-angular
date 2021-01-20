import { HttpClient } from "@angular/common/http";
import { IServerSideDatasource } from "ag-grid-community";

const getRequestCols = (columnApi: any) =>
  columnApi
    .getAllColumns()
    .map(o => o.userProvidedColDef)
    .filter(o => o.field)
    .map(o => {
      return { field: o.field };
    });

const createDatasource = (
  http: HttpClient,
  table: string
): IServerSideDatasource => {
  return {
    getRows: function(params: any) {
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
            const data = unflattenMany(response.data);
            params.successCallback(data, response.lastRow);
          } else {
            params.failCallback();
          }
        });
    }
  };
};

const unflatten = (obj: any) => {
  var result = {};
  for (const key in obj) {
    var keys = key.split(".");
    keys.reduce(function(acc, curVal, i) {
      return (
        acc[curVal] ||
        (acc[curVal] = isNaN(Number(keys[i + 1]))
          ? keys.length - 1 == i
            ? obj[key]
            : {}
          : [])
      );
    }, result);
  }
  return result;
};
const unflattenMany = (data: [any]) => data.map(obj => unflatten(obj));

export default { createDatasource, unflattenMany };
