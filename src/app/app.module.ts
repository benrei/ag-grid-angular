import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AllMaterialModules } from "./material.module";
import { ToolbarModule } from "./toolbar/toolbar.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { PagesModule } from "./pages/pages.module";
import { SimpleComponent } from "./pages/simple/simple.component";
import { RowGroupComponent } from "./pages/row-group/row-group.component";
import { SizeColumnsToFitComponent } from "./pages/size-columns-to-fit/size-columns-to-fit.component";
import { MenuModule } from "./menu/menu.module";
import { TimeRegistrationComponent } from "./pages/time-registration/time-registration.component";
import { ServerSideComponent } from "./pages/server-side/server-side.component";
import { ServerSideCwComponent } from "./pages/server-side-cw/server-side-cw.component";
import { ServerSideNestedComponent } from "./pages/server-side-nested/server-side-nested.component";

const appRoutes: Routes = [
  { path: "time-registration", component: TimeRegistrationComponent },
  { path: "row-group", component: RowGroupComponent },
  { path: "sizeColumnsToFit", component: SizeColumnsToFitComponent },
  { path: "clientSide", component: SimpleComponent },
  { path: "serverSideCw", component: ServerSideCwComponent },
  { path: "serverSideNested", component: ServerSideNestedComponent },
  { path: "serverSide", component: ServerSideComponent }
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
    ToolbarModule,
    MenuModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
  exports: []
})
export class AppModule {}
