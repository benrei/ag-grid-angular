import { ChangeDetectionStrategy } from "@angular/compiler/src/core";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-list2",
  templateUrl: "./card-list2.component.html",
  styleUrls: ["./card-list2.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardList2Component {
  @Input() items;
  @Input() isRecursive = false;
  @Input() fieldKey = "name";
  @Input() valueKey = "value";

  isSection(item) {
    return Array.isArray(item) && !this.isRecursive;
  }
  isArray(val) {
    return Array.isArray(val);
  }
  isObject(val) {
    return typeof val === "object" && val !== null;
  }
}
