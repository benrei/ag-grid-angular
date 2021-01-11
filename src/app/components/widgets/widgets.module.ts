import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardListComponent } from "./card-list/card-list.component";
import { CardList2Component } from "./card-list2/card-list2.component";

@NgModule({
  imports: [CommonModule],
  declarations: [CardListComponent, CardList2Component],
  exports: [CardListComponent, CardList2Component]
})
export class WidgetsModule {}
