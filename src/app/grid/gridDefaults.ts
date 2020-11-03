const gridOptionsDefaults = {
  autoGroupColumnDef: {
    minWidth: 150
  },
  enableRangeSelection: true,
  enableRangeHandle: true,
  // enableFillHandle: true,
  // frameworkComponents: {},
  rowSelection: "single",
  rowGroupPanelShow: "always",
  statusBar: {
    statusPanels: [
      { statusPanel: "agTotalAndFilteredRowCountComponent", align: "left" },
      { statusPanel: "agAggregationComponent" }
    ]
  }
};
const colDefDefaults = {
  enableRowGroup: true,
  floatingFilter: true,
  width: 120,
  resizable: true,
  sortable: true
};
export { gridOptionsDefaults, colDefDefaults };
