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
    const { key, shiftKey } = params.event;
    console.log("onCellKeyPress");
    console.log(params.node);
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
  const { key, shiftKey } = params.event;
  if (shiftKey) {
    if (key === "Enter") params.api.tabToPreviousCell();
  } else {
    if (key === "Enter") params.api.tabToNextCell();
  }
  // Update selected row
  const { rowIndex } = params.api.getFocusedCell();
  params.api.forEachNode(function(node) {
    if (rowIndex === node.rowIndex) {
      node.setSelected(true);
    }
  });
};

export { gridOptionsDefaults, colDefDefaults };
