import { Component, Input, OnInit } from "@angular/core";
import { SidenavService } from "../sidenav.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  constructor(private sidenavService: SidenavService) {}

  toogle() {
    this.sidenavService.sideNav.toggle();
  }

  ngOnInit() {}
}
