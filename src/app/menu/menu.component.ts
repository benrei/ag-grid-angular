import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  typesOfShoes: string[] = [
    "Boots",
    "Clogs",
    "Loafers",
    "Moccasins",
    "Sneakers"
  ];

  constructor() {}

  ngOnInit() {}
}
