import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToolbarComponent } from "./toolbar.component";
import { AllMaterialModules } from "../material.module";

@NgModule({
  imports: [CommonModule, AllMaterialModules],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
