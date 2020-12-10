import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  items = [
    [{ field: "Spent", value: null }, { field: "Service spent", value: 11.0 }],
    [
      { field: "Cost sum", value: 9241.55 },
      [
        { field: "Service", value: 6809.44 },
        { field: "Products", value: 2432.11 },
        { field: "Other", value: 0.0 },
        [{ field: "Of which subcontractors", value: 0.0 }]
      ]
    ],
    [
      { field: "Invoiced sum", value: 5666.6 },
      [{ field: "Of which sub-invoiced", value: 0.0 }],
      { field: "Booked reserve", value: 0.0 }
    ],
    [
      { field: "Gross margin", value: -3574.95 },
      { field: "Per hour (NOK)", value: 2432.11 },
      { field: "Products", value: 2432.11 }
    ],
  ];
  budget = [
    {field: 'Budget'}
  ]
  constructor() {}

  ngOnInit() {}
}
