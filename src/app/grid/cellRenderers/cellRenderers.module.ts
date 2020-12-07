import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { PdfIconRenderer } from "./pdf-icon-renderer.component";

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [PdfIconRenderer],
  exports: [PdfIconRenderer]
})
export class CellRenderersModule {}
