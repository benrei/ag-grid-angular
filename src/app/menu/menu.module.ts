import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule, MatListModule],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule {}
