import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardListComponent } from "./card-list/card-list.component";
import { MatListModule } from "@angular/material/list";

@NgModule({
  imports: [CommonModule, MatListModule],
  declarations: [CardListComponent],
  exports: [CardListComponent]
})
export class WidgetsModule {}
