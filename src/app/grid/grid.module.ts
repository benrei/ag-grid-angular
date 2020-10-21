import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GridHeaderComponent } from "./grid-header/grid-header.component";
import { AllMaterialModules } from "../material.module";
import { AddActionComponent } from "./actions/add-action.component";
import { EditActionComponent } from "./actions/edit-action.component";
import { DeleteActionComponent } from "./actions/delete-action.component";
import { RefreshActionComponent } from "./actions/refresh-action.component";
import { ResetColumnsActionComponent } from "./actions/reset-columns-action.component";
import { GridDirective } from "./grid.directive";

@NgModule({
  imports: [CommonModule, AllMaterialModules],
  declarations: [
    GridHeaderComponent,
    AddActionComponent,
    EditActionComponent,
    DeleteActionComponent,
    RefreshActionComponent,
    ResetColumnsActionComponent,
    GridDirective
  ],
  exports: [
    GridHeaderComponent,
    AddActionComponent,
    EditActionComponent,
    DeleteActionComponent,
    RefreshActionComponent,
    ResetColumnsActionComponent,
    GridDirective
  ]
})
export class GridModule {}
