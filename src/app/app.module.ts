import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ToolbarModule } from "./toolbar/toolbar.module";
import { MenuModule } from "./menu/menu.module";
import { HttpClientModule } from "@angular/common/http";
import { PagesModule } from "./pages/pages.module";
import { AppRoutingModule } from "./app-routing.module";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    ToolbarModule,
    MenuModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
