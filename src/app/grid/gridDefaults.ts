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
    enterToNextCell(params);
  }
};
const colDefDefaults = {
  enableRowGroup: true,
  floatingFilter: true,
  width: 120,
  resizable: true,
  sortable: true,
  suppressKeyboardEvent: ({ event }) => ["Enter"].includes(event.key)
};

const enterToNextCell = params => {
  const { code, shiftKey } = params.event;
  if (shiftKey) {
    if (code === "Enter") params.api.tabToPreviousCell();
  } else {
    if (code === "Enter") params.api.tabToNextCell();
  }
  const { rowIndex } = params.api.getFocusedCell();
  if (rowIndex !== params.rowIndex) {
    // Update selected row
    params.api.forEachNode(function(node) {
      if (rowIndex === node.rowIndex) {
        node.setSelected(true);
      }
    });
  }
};

export { gridOptionsDefaults, colDefDefaults };
