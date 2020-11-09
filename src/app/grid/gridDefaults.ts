import utils from "./utils";
const gridOptionsDefaults = {
  autoGroupColumnDef: {
    minWidth: 150
  },
  enableRangeSelection: true,
  enableRangeHandle: true,
  // enableFillHandle: true,
  // enterMovesDown: true,
  // frameworkComponents: {},
  rowSelection: "single",
  rowGroupPanelShow: "always",
  statusBar: {
    statusPanels: [
      { statusPanel: "agTotalAndFilteredRowCountComponent", align: "left" },
      { statusPanel: "agAggregationComponent" }
    ]
  },
  onCellKeyPress: params => {
    utils.gridOptions.onCellKeyPress.enterToNextCell(params);
  }
};
const colDefDefaults = {
  enableCellChangeFlash: true,
  enableRowGroup: true,
  floatingFilter: true,
  width: 120,
  resizable: true,
  sortable: true,
  suppressKeyboardEvent: ({ event }) => ["Enter"].includes(event.key)
};

export { gridOptionsDefaults, colDefDefaults };
