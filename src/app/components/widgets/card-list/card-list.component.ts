import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent implements OnInit {
  @Input() items;
  @Input() isRecursive = false;
  constructor() {}

  ngOnInit() {}
  isSection(item) {
    return this.isArray(item) && !this.isRecursive;
  }
  isArray(val) {
    return Array.isArray(val);
  }
  isObject(val) {
    return typeof val === "object" && val !== null;
  }
}
