import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "./components/components.module";
import { DatasourceCWService } from "./services/datasource-cw.service";
import { DatasourceDummyService } from "./services/datasource-dummy.service";

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [],
  providers: [DatasourceCWService, DatasourceDummyService]
})
export class AgGridExtentionModule {}
