import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { PdfIconRenderer } from "./pdf-icon-renderer.component";
import { ErrorRenderer } from "../cellRenderers/error-renderer.component";

@NgModule({
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  declarations: [PdfIconRenderer, ErrorRenderer],
  exports: [PdfIconRenderer, ErrorRenderer]
})
export class CellRenderersModule {}
