import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-grid-header",
  templateUrl: "./grid-header.component.html",
  styleUrls: ["./grid-header.component.css"]
})
export class GridHeaderComponent implements OnInit {
  @Output() outputToParent = new EventEmitter<string>();
  constructor() {}

  onKeyup(value) {
    this.outputToParent.emit(value);
   // console.log("Clicked");
  }
  ngOnInit() {}
}
