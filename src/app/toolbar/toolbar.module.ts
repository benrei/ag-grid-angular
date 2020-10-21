import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToolbarComponent } from "./toolbar.component";
import { AllMaterialModules } from "../material/material.module";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "../menus/menu/menu.component";

@NgModule({
  imports: [CommonModule, RouterModule, AllMaterialModules],
  declarations: [ToolbarComponent, MenuComponent],
  exports: [ToolbarComponent, MenuComponent]
})
export class ToolbarModule {}
