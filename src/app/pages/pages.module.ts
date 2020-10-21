import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimpleComponent } from "./simple/simple.component";
// ag-grid
import { AgGridModule } from "ag-grid-angular";

import { RowGroupComponent } from "./row-group/row-group.component";
import { CwGridModule } from "../cw-grid/cw-grid.module";
import { SizeColumnsToFitComponent } from "./size-columns-to-fit/size-columns-to-fit.component";

@NgModule({
  imports: [CommonModule, AgGridModule.withComponents([]), CwGridModule],
  declarations: [SimpleComponent, RowGroupComponent, SizeColumnsToFitComponent],
  exports: [SimpleComponent, SizeColumnsToFitComponent]
})
export class PagesModule {}
