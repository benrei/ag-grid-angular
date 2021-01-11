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
        [{ field: "Of which subcontractors asdasd adasasd", value: 0.0 }]
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
    ]
  ];
  budget = [{ field: "Budget" }];

  widgetData = {
    widgets: [
      {
        name: "Widget.Assignment.Spent",
        data: {
          items: [
            {
              name: "Service",
              value: 11,
              type: "Number"
            },
            {
              name: "Cost",
              value: 9241.55,
              type: "Number",
              group: true,
              items: [
                {
                  name: "Service",
                  value: 6809.44,
                  type: "Number"
                },
                {
                  name: "Products",
                  value: 2432.11,
                  type: "Number"
                },
                {
                  name: "Other",
                  value: 0,
                  type: "Number",
                  items: [
                    {
                      name: "Subcontractors",
                      value: 0,
                      type: "Number"
                    }
                  ]
                }
              ]
            },
            {
              name: "Invoiced",
              value: 5666.6,
              type: "Number",
              group: true,
              items: [
                {
                  name: "Subinvoiced",
                  value: 0,
                  type: "Number"
                }
              ]
            },
            {
              name: "BookedReserve",
              value: 1200.3,
              type: "Number"
            },
            {
              name: "GrossMargin",
              value: -3575.77,
              type: "Number",
              group: true
            },
            {
              name: "PerHour",
              value: -324.99,
              type: "Number"
            },
            {
              name: "Coverage",
              value: 15,
              type: "Percent"
            }
          ]
        }
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}
