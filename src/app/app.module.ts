import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SidenavService } from "./sidenav.service";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { AllMaterialModules } from "./material/material.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AllMaterialModules],
  declarations: [AppComponent, HelloComponent, ToolbarComponent],
  bootstrap: [AppComponent],
  providers: [SidenavService]
})
export class AppModule {}
