import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimpleComponent } from "./simple/simple.component";

// ag-grid
import { AgGridModule } from "ag-grid-angular";

@NgModule({
  imports: [CommonModule, AgGridModule.withComponents([])],
  declarations: [SimpleComponent]
})
export class PagesModule {}
