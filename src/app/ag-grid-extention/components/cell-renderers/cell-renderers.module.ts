import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorRenderer } from "./error-renderer.component";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  declarations: [ErrorRenderer],
  exports: [ErrorRenderer],
  entryComponents: [ErrorRenderer]
})
export class CellRenderersModule {}
