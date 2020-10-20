import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CwGridHeaderComponent } from "./cw-grid-header/cw-grid-header.component";
import { AllMaterialModules } from "../material/material.module";
import { AddActionComponent } from "./actions/add-action.component";
import { EditActionComponent } from "./actions/edit-action.component";

@NgModule({
  imports: [CommonModule, AllMaterialModules],
  declarations: [
    CwGridHeaderComponent,
    AddActionComponent,
    EditActionComponent
  ],
  exports: [CwGridHeaderComponent, AddActionComponent]
})
export class CwGridModule {}
