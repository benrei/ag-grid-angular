import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ActionsModule } from "./actions/actions.module";
import { GridToolbarComponent } from "./grid-toolbar/grid-toolbar.component";

@NgModule({
  imports: [CommonModule, MatToolbarModule, ActionsModule],
  declarations: [GridToolbarComponent],
  exports: [GridToolbarComponent, ActionsModule]
})
export class GridExtentionModule {}
