import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-grid-header",
  templateUrl: "./grid-header.component.html",
  styleUrls: ["./grid-header.component.css"]
})
export class GridHeaderComponent implements OnInit {
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
