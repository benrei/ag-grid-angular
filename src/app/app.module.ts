import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AllMaterialModules } from "./material/material.module";
import { ToolbarModule } from "./toolbar/toolbar.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuComponent } from "./menu/menu.component";
import { Routes, RouterModule } from "@angular/router/router";

const appRoutes: Routes = [
  { path: "test", component: null },
  { path: "test2", component: null },
  { path: "test3", component: null }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AllMaterialModules,
    ToolbarModule
  ],
  declarations: [AppComponent, MenuComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
