import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import { AllMaterialModules } from "../material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule, AllMaterialModules],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule {}
