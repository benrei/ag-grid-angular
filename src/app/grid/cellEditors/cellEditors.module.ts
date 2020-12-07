import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { SelectBoxEditor } from "./select-box-editor/select-box-editor.component";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { DatepickerEditor } from "./datepicker-editor/datepicker-editor.component";
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  declarations: [SelectBoxEditor, DatepickerEditor],
  exports: [SelectBoxEditor, DatepickerEditor]
})
export class CellEditorsModule {}
