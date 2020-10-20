import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToolbarComponent } from "./toolbar.component";
import { AllMaterialModules } from "../material/material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule, AllMaterialModules],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
