import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToolbarComponent } from "./toolbar.component";
import { AllMaterialModules } from "../material.module";
import { MenuModule } from "../menu/menu.module";

@NgModule({
  imports: [CommonModule, AllMaterialModules, MenuModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
