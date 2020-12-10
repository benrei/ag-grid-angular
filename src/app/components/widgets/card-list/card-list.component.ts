import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() items;
  constructor() { }

  ngOnInit() {
  }
  isArray(val) {
    return Array.isArray(val);
  }
  isObject(val) {
    return typeof val === 'object' && val !== null;
  }
  printVal(val) {
    console.log(val);
  }
}