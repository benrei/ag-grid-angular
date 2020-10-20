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

const appRoutes: Routes = [{ path: "simple", component: SimpleComponent }];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AllMaterialModules,
    ToolbarModule
  ],
  declarations: [AppComponent, MenuComponent, SimpleComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
