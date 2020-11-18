import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GridHeaderComponent } from "./grid-header/grid-header.component";
import { AllMaterialModules } from "../material.module";
import { AddActionComponent } from "./actions/add-action.component";
import { EditActionComponent } from "./actions/edit-action.component";
import { DeleteActionComponent } from "./actions/delete-action.component";
import { RefreshActionComponent } from "./actions/refresh-action.component";
import { ResetColumnsActionComponent } from "./actions/reset-columns-action.component";
import { GridDirective } from "./grid.directive";
import { FitColumnsActionComponent } from "./actions/fit-columns.component";
import { PdfIconRenderer } from "./frameworkComponents/pdf-icon-renderer.component";
import { SelectBoxEditor } from "./editors/select-box-editor/select-box-editor.component";
import { DatepickerEditor } from "./editors/datepicker-editor/datepicker-editor.component";
import { NgSelectBoxEditor } from './editors/ng-select-box/ng-select-box-editor.component';

@NgModule({
  imports: [CommonModule, AllMaterialModules],
  declarations: [
    GridHeaderComponent,
    AddActionComponent,
    EditActionComponent,
    DeleteActionComponent,
    RefreshActionComponent,
    ResetColumnsActionComponent,
    FitColumnsActionComponent,
    PdfIconRenderer,
    GridDirective,
    SelectBoxEditor,
    DatepickerEditor,
    NgSelectBoxEditor
  ],
  exports: [
    GridHeaderComponent,
    AddActionComponent,
    EditActionComponent,
    DeleteActionComponent,
    RefreshActionComponent,
    ResetColumnsActionComponent,
    FitColumnsActionComponent,
    PdfIconRenderer,
    GridDirective,
    SelectBoxEditor,
    DatepickerEditor
  ]
})
export class GridModule {}
