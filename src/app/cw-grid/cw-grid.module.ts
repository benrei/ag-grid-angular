import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CwGridHeaderComponent } from "./cw-grid-header/cw-grid-header.component";
import { AllMaterialModules } from "../material/material.module";

@NgModule({
  imports: [CommonModule, AllMaterialModules],
  declarations: [CwGridHeaderComponent],
  exports: [CwGridHeaderComponent]
})
export class CwGridModule {}
