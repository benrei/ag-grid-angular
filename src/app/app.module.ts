import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SidenavService } from "./sidenav.service";
import { AllMaterialModules } from "./material/material.module";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AllMaterialModules, ToolbarComponent],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [SidenavService]
})
export class AppModule {}
