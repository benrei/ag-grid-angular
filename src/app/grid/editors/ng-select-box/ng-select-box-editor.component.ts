import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { ICellEditorAngularComp } from "ag-grid-angular";
import { DataService, Person } from "../../../services/data.service";

@Component({
  selector: "app-ng-select-box-editor",
  styleUrls: ["./ng-select-box-editor.component.css"],
  template: `
    <ng-select
      appendTo="ag-grid-angular"
      [items]="people"
      bindLabel="name"
      [loading]="peopleLoading"
      [searchFn]="customSearchFn"
      #input
    >
      <ng-template ng-option-tmp let-item="item">
        {{ item.name }}
        <small>{{ item.gender }}</small>
      </ng-template>
    </ng-select>
  `
})
export class NgSelectBoxEditor
  implements ICellEditorAngularComp, AfterViewInit {
  @ViewChild("input", { read: ViewContainerRef }) public input: any;
  people: Person[] = [];
  peopleLoading = false;
  value;
  style;

  constructor(private dataService: DataService) {}

  agInit(params: any): void {
    console.log(params);
    this.style;
    this.loadPeople();
  }

  getValue(): any {
    return this.value;
  }
  // isPopup() {
  //   return true;
  // }

  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  ngAfterViewInit() {
    window.setTimeout(() => {
      // this.input.element.nativeElement.focus();
    });
  }

  private loadPeople() {
    this.peopleLoading = true;
    this.dataService.getPeople().subscribe(x => {
      this.people = x;
      this.peopleLoading = false;
      console.log(this.people);
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
