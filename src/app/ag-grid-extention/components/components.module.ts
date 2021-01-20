import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CellEditorsModule } from "./cell-editors/cell-editors.module";
import { CellRenderersModule } from "./cell-renderers/cell-renderers.module";
import { DateComponentModule } from "./date-component/date-component.module";
import { FilterComponentModule } from "./filter-component/filter-component.module";
import { HeaderComponentModule } from "./header-component/header-component.module";
import { ToolPanelComponentModule } from "./tool-panel-component/tool-panel-component.module";
import { TooltipComponentModule } from "./tooltip-component/tooltip-component.module";
import { SelectBoxEditor } from "./cell-editors/select-box-editor/select-box-editor.component";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule,
    CellEditorsModule,
    CellRenderersModule,
    DateComponentModule,
    FilterComponentModule,
    HeaderComponentModule,
    ToolPanelComponentModule,
    TooltipComponentModule
  ],
  declarations: [],
  exports: []
})
export class ComponentsModule {}
