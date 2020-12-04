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
        console.log(params.request);
        params.request.table = table;
        params.request.cols = params.columnApi
          .getAllColumns()
          .map(o => o.userProvidedColDef)
          .filter(o => o.field)
          .map(o => {
            return { field: o.field };
          });

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
