import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// ag-grid
import { AgGridModule } from "ag-grid-angular";
import { GridModule } from "../grid/grid.module";
import { ClientSideComponent } from "./client-side/client-side.component";
import { HttpClientModule } from "@angular/common/http";
import { ServerSideComponent } from "./server-side/server-side.component";
import { DataCWService } from "../services/dataCW.service";
import { ServerSideCwComponent } from "./server-side-cw/server-side-cw.component";

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    GridModule
  ],
  declarations: [
    ClientSideComponent,
    // RowGroupComponent,
    // SizeColumnsToFitComponent,
    // TimeRegistrationComponent,
    ServerSideComponent,
    ServerSideCwComponent
    // ServerSideNestedComponent
  ],
  exports: [],
  providers: [DataCWService]
})
export class PagesModule {}
