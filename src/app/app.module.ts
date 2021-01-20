import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MenuModule } from "./menu/menu.module";
import { ToolbarModule } from "./toolbar/toolbar.module";
import { PagesModule } from "./pages/pages.module";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MenuModule,
    PagesModule,
    ToolbarModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
