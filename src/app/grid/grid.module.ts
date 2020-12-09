import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GridHeaderComponent } from "./grid-header/grid-header.component";
import { GridDirective } from "./grid.directive";
import { ActionsModule } from "./actions/actions.module";
import { CellEditorsModule } from "./cellEditors/cellEditors.module";
import { CellRenderersModule } from "./cellRenderers/cellRenderers.module";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    ActionsModule,
    CellEditorsModule,
    CellRenderersModule
  ],
  declarations: [GridHeaderComponent, GridDirective],
  exports: [GridHeaderComponent, ActionsModule, GridDirective],
  providers: []
})
export class GridModule {}
