import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AllMaterialModules } from "./material/material.module";
import { ToolbarModule } from "./toolbar/toolbar.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuComponent } from "./menu/menu.component";
import { Routes, RouterModule } from "@angular/router";
import { SimpleComponent } from "./pages/simple/simple.component";
import { HttpClientModule } from "@angular/common/http";

import { AgGridModule } from "ag-grid-angular";
import { PagesModule } from "./pages/pages.module";

const appRoutes: Routes = [{ path: "simple", component: SimpleComponent }];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([]),
    PagesModule,
    AllMaterialModules,
    ToolbarModule
  ],
  declarations: [AppComponent, MenuComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
