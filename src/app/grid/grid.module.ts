import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GridHeaderComponent } from "./grid-header/grid-header.component";
import { AllMaterialModules } from "../material.module";
import { GridDirective } from "./grid.directive";
import { PdfIconRenderer } from "./frameworkComponents/pdf-icon-renderer.component";
import { SelectBoxEditor } from "./editors/select-box-editor/select-box-editor.component";
import { DatepickerEditor } from "./editors/datepicker-editor/datepicker-editor.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgSelectBoxEditor } from "./editors/ng-select-box/ng-select-box-editor.component";
import { DataService } from "./data.service";
import { ActionsModule } from "./actions/actions.module";

@NgModule({
  imports: [CommonModule, AllMaterialModules, NgSelectModule, ActionsModule],
  declarations: [
    GridHeaderComponent,
    PdfIconRenderer,
    GridDirective,
    SelectBoxEditor,
    DatepickerEditor,
    NgSelectBoxEditor
  ],
  exports: [
    GridHeaderComponent,
    ActionsModule,
    PdfIconRenderer,
    GridDirective,
    SelectBoxEditor,
    DatepickerEditor
  ],
  providers: [DataService]
})
export class GridModule {}
