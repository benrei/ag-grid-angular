import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimpleComponent } from "./simple/simple.component";

// ag-grid
import { AgGridModule } from "ag-grid-angular";
import { RowGroupComponent } from "./row-group/row-group.component";
import { CwGridModule } from "../cw-grid/cw-grid.module";

@NgModule({
  imports: [CommonModule, AgGridModule.withComponents([]), CwGridModule],
  declarations: [SimpleComponent, RowGroupComponent],
  exports: [SimpleComponent]
})
export class PagesModule {}
