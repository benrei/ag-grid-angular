import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  menuItems = [
    { title: "Home", path: "" },
    { title: "Time Registration", path: "time-registration" },
    { title: "Row group", path: "row-group" },
    { title: "sizeColumnsToFit", path: "sizeColumnsToFit" },
    { title: "Client Side", path: "clientSide" },
    { title: "Server Side", path: "serverSide" }
  ];

  constructor() {}

  ngOnInit() {}
}
