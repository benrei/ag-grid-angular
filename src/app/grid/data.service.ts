import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { unflattenMany } from "../utils";
import { IServerSideDatasource } from "ag-grid-community";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  createDatasource(table: string): IServerSideDatasource {
    const http = this.http;
    return {
      getRows: function(params: any) {
        const { columnApi, request } = params;
        request.table = table;

        // Only set cols if group fully expanded
        if (request.groupKeys.length === request.rowGroupCols.length) {
          console.log(columnApi.getAllColumns());
          params.request.cols = columnApi
            .getAllColumns()
            .filter(o => !o.rowGroupActive)
            .map(o => o.colDef)
            .filter(o => o.field && !o.aggFunc)
            .map(o => {
              return { field: o.field };
            });
        }

        console.log(request);
        console.log(params.request.cols);

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
  }
}
