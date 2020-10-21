import { Component, OnInit, Input, HostBinding } from "@angular/core";

@Component({
  selector: "app-cw-grid-header",
  templateUrl: "./cw-grid-header.component.html",
  styleUrls: ["./cw-grid-header.component.css"]
})
export class CwGridHeaderComponent implements OnInit {
  @Input() gridApi;
  @Input() addFn;
  @HostBinding("class.disabled") get isDisabled() {
    return !(this.gridApi?.getSelectedRows()?.[0]);
  }
  constructor() {}

  ngOnInit() {}
}
