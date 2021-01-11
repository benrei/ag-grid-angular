import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardListComponent } from "./card-list/card-list.component";
import { CardList2Component } from "./card-list-2/card-list-2.component";

@NgModule({
  imports: [CommonModule],
  declarations: [CardListComponent, CardList2Component],
  exports: [CardListComponent, CardList2Component]
})
export class WidgetsModule {}
