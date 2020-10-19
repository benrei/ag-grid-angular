import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SidenavService } from "./sidenav.service";
import { AllMaterialModules } from "./material/material.module";
import { ToolbarModule } from "./toolbar/toolbar.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AllMaterialModules,
    ToolbarModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [SidenavService]
})
export class AppModule {}
