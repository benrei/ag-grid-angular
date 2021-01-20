import { Injectable } from "@angular/core";

@Injectable()
export class DatasourceDummyService {
  constructor() {}

  createFakeServer(data) {
    return {
      getData: function(request) {
        var requestedRows = data.slice();
        return {
          success: true,
          rows: requestedRows
        };
      }
    };
  }
  createDatasource(fakeServer) {
    return {
      getRows: function(params) {
        console.log("[Datasource] - rows requested by grid: ", params.request);
        var response = fakeServer.getData(params.request);
        setTimeout(function() {
          if (response.success) {
            params.success({ rowData: response.rows });
          } else {
            params.fail();
          }
        }, 500);
      }
    };
  }
}
