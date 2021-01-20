import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddActionComponent } from "./add-action.component";
import { EditActionComponent } from "./edit-action.component";
import { DeleteActionComponent } from "./delete-action.component";
import { RefreshActionComponent } from "./refresh-action.component";
import { ResetColsActionComponent } from "./reset-cols-action.component";
import { FitColumnsActionComponent } from "./fit-columns.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [
    AddActionComponent,
    DeleteActionComponent,
    EditActionComponent,
    FitColumnsActionComponent,
    RefreshActionComponent,
    ResetColsActionComponent
  ],
  exports: [
    AddActionComponent,
    DeleteActionComponent,
    EditActionComponent,
    FitColumnsActionComponent,
    RefreshActionComponent,
    ResetColsActionComponent
  ]
})
export class ActionsModule {}
