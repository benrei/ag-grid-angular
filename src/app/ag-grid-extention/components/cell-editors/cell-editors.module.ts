import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectBoxEditor } from "./select-box-editor/select-box-editor.component";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  declarations: [SelectBoxEditor],
  exports: [SelectBoxEditor],
  entryComponents: [SelectBoxEditor]
})
export class CellEditorsModule {}
