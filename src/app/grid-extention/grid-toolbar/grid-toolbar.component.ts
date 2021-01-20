import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-grid-toolbar",
  templateUrl: "./grid-toolbar.component.html",
  styleUrls: ["./grid-toolbar.component.css"]
})
export class GridToolbarComponent implements OnInit {
  @Output() quickfilterTextOutput = new EventEmitter<string>();
  @Input() delay = 300;
  constructor() {}
  timer;
  onKeyup(event) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.quickfilterTextOutput.emit(event.target.value);
    }, this.delay);
  }

  ngOnInit() {}
}
