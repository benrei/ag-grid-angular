import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-select-box-editor",
  styles: [
    `
      .mat-form-field {
        display: block;
      }
      input {
        height: 100%;
      }
      mat-datepicker-toggle {
        position: absolute;
        right: 0;
      }
    `
  ],
  template: `
    <ng-select
      [items]="people"
      bindLabel="name"
      [loading]="peopleLoading"
      [searchFn]="customSearchFn"
    >
      <ng-template ng-option-tmp let-item="item">
        {{ item.name }} <br />
        <small>{{ item.gender }}</small>
      </ng-template>
    </ng-select>
  `
})
export class NgSelectBoxEditor implements OnInit {
  people: Person[] = [];
  peopleLoading = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadPeople();
  }

  private loadPeople() {
    this.peopleLoading = true;
    this.dataService.getPeople().subscribe(x => {
      this.people = x;
      this.peopleLoading = false;
    });
  }

  customSearchFn(term: string, item: Person) {
    term = term.toLowerCase();
    return (
      item.name.toLowerCase().indexOf(term) > -1 ||
      item.gender.toLowerCase() === term
    );
  }
}
