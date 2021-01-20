import { Component } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent {
  menuItems = [
    { title: "Home", path: "" },
    { title: "Client Side", path: "clientSide" },
    { title: "Server Side", path: "serverSide" },
    { title: "Server Side CW", path: "serverSideCw" }
  ];
  constructor() {}
}
