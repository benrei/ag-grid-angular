import { Component, Input, OnInit } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  @Input() drawer: MatDrawer;
  constructor() // private sidenavService: SidenavService
  {}

  // toggle() {
  //   this.sidenavService.sideNav.toggle();
  // }

  ngOnInit() {}
}
