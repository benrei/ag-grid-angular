import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AllMaterialModules } from "./material/material.module";
import { ToolbarModule } from "./toolbar/toolbar.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuComponent } from "./menu/menu.component";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { PagesModule } from "./pages/pages.module";
import { SimpleComponent } from "./pages/simple/simple.component";
import { RowGroupComponent } from "./pages/row-group/row-group.component";

const appRoutes: Routes = [
  { path: "simple", component: SimpleComponent },
  { path: "row-group", component: RowGroupComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    PagesModule,
    AllMaterialModules,
    ToolbarModule
  ],
  declarations: [AppComponent, MenuComponent],
  bootstrap: [AppComponent],
  providers: [],
  exports: []
})
export class AppModule {}
