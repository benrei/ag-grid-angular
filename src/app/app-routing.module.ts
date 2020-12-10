import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientSideComponent } from "./pages/client-side/client-side.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PagesModule } from "./pages/pages.module";
import { ServerSideCwComponent } from "./pages/server-side-cw/server-side-cw.component";
import { ServerSideComponent } from "./pages/server-side/server-side.component";

const routes: Routes = [
  { path: "clientSide", component: ClientSideComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "serverSide", component: ServerSideComponent },
  { path: "serverSideCw", component: ServerSideCwComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
