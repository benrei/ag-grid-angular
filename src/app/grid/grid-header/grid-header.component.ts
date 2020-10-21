import { Component, OnInit, Input, HostBinding } from "@angular/core";

@Component({
  selector: "app-grid-header",
  templateUrl: "./grid-header.component.html",
  styleUrls: ["./grid-header.component.css"]
})
export class GridHeaderComponent implements OnInit {
  @Input() gridApi;
  @Input() addFn;
  @HostBinding("class.disabled") get isDisabled() {
    return !(this.gridApi?.getSelectedRows()?.[0]);
  }
  constructor() {}

  ngOnInit() {}
}
