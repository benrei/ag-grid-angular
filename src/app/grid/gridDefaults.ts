const gridOptionsDefaults = {
  autoGroupColumnDef: {
    minWidth: 150
  },
  enableRangeSelection: true,
  enableRangeHandle: true,
  // enableFillHandle: true,
  enterMovesDown: true,
  // frameworkComponents: {},
  rowSelection: "single",
  rowGroupPanelShow: "always",
  statusBar: {
    statusPanels: [
      { statusPanel: "agTotalAndFilteredRowCountComponent", align: "left" },
      { statusPanel: "agAggregationComponent" }
    ]
  },
  onCellKeyPress: e => {
    console.log(e);
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
