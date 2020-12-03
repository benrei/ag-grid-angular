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
import { ServerSideCwComponent } from './server-side-cw/server-side-cw.component';
import { ServerSideNestedComponent } from './server-side-nested/server-side-nested.component';
import { ServerGroupMasterComponent } from './server-group-master/server-group-master.component';

@NgModule({
  imports: [CommonModule, AgGridModule.withComponents([]), GridModule],
  declarations: [
    SimpleComponent,
    RowGroupComponent,
    SizeColumnsToFitComponent,
    TimeRegistrationComponent,
    ServerSideComponent,
    ServerSideCwComponent,
    ServerSideNestedComponent,
    ServerGroupMasterComponent
  ],
  exports: [
    SimpleComponent,
    TimeRegistrationComponent,
    SizeColumnsToFitComponent,
    ServerSideComponent
  ]
})
export class PagesModule {}
