import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CwGridHeaderComponent } from "./cw-grid-header/cw-grid-header.component";
import { AllMaterialModules } from "../material/material.module";
import { AddActionComponent } from "./actions/add-action.component";
import { EditActionComponent } from "./actions/edit-action.component";
import { DeleteActionComponent } from "./actions/delete-action.component";
import { RefreshActionComponent } from "./actions/refresh-action.component";
import { ResetColumnsActionComponent } from "./actions/reset-columns-action.component";

@NgModule({
  imports: [CommonModule, AllMaterialModules],
  declarations: [
    CwGridHeaderComponent,
    AddActionComponent,
    EditActionComponent,
    DeleteActionComponent,
    RefreshActionComponent,
    ResetColumnsActionComponent
  ],
  exports: [
    CwGridHeaderComponent,
    AddActionComponent,
    EditActionComponent,
    DeleteActionComponent,
    RefreshActionComponent,
    ResetColumnsActionComponent
  ]
})
export class CwGridModule {}
