import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  menuItems = [
    { title: "Home", path: "" },
    { title: "Client Side", path: "clientSide" },
    { title: "Dashboard", path: "dashboard" },
    // { title: "Time Registration", path: "time-registration" },
    // { title: "Row group", path: "row-group" },
    // { title: "sizeColumnsToFit", path: "sizeColumnsToFit" },
    { title: "Server Side CW", path: "serverSideCw" },
    // { title: "Server Side Nested", path: "serverSideNested" },
    { title: "Server Side", path: "serverSide" }
  ];

  constructor() {}

  ngOnInit() {}
}
