import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimpleComponent } from "./simple/simple.component";
// ag-grid
import { AgGridModule } from "ag-grid-angular";

import { RowGroupComponent } from "./row-group/row-group.component";
import { GridModule } from "../grid/grid.module";
import { SizeColumnsToFitComponent } from "./size-columns-to-fit/size-columns-to-fit.component";
import { TimeRegistrationComponent } from "./time-registration/time-registration.component";
import { ServerSideComponent } from "./server-side/server-side.component";

@NgModule({
  imports: [CommonModule, AgGridModule.withComponents([]), GridModule],
  declarations: [
    SimpleComponent,
    RowGroupComponent,
    SizeColumnsToFitComponent,
    TimeRegistrationComponent,
    ,
    ServerSideComponent
  ],
  exports: [
    SimpleComponent,
    TimeRegistrationComponent,
    SizeColumnsToFitComponent,
    ServerSideComponent
  ]
})
export class PagesModule {}
