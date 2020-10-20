import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  menuItems = [
    { title: "Home", path: "" },
    { title: "Simple", path: "simple" },
    { title: "Row group", path: "row-group" }
  ];

  constructor() {}

  ngOnInit() {}
}
