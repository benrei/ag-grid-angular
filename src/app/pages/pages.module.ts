import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from "@angular/common/http";
import { ClientSideComponent } from "./client-side/client-side.component";
import { AgGridExtentionModule } from "../ag-grid-extention/ag-grid-extention.module";
import { ServerSideCwComponent } from "./server-side-cw/server-side-cw.component";
import { GridExtentionModule } from "../grid-extention/grid-extention.module";
import { ServerSideComponent } from './server-side/server-side.component';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    AgGridExtentionModule,
    GridExtentionModule
  ],
  declarations: [ClientSideComponent, ServerSideCwComponent, ServerSideComponent]
})
export class PagesModule {}
