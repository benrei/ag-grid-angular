import utils from "../utils";

const gridOptions = {
  autoGroupColumnDef: {
    minWidth: 150
  },
  enableCharts: true,
  enableRangeSelection: true,
  enableRangeHandle: true,
  // enableFillHandle: true,
  // enterMovesDown: true,
  getContextMenuItems: utils.getContextMenuItems,
  navigateToNextCell: utils.gridOptions.navigateToNextCell.arrowKeysLeftRight,
  rowSelection: "single",
  rowGroupPanelShow: "always",
  statusBar: {
    statusPanels: [
      { statusPanel: "agTotalAndFilteredRowCountComponent", align: "left" },
      { statusPanel: "agAggregationComponent" }
    ]
  },
  // stopEditingWhenGridLosesFocus: true,
  // suppressRowClickSelection: true,
  undoRedoCellEditing: true,
  onCellKeyPress: params => {
    utils.gridOptions.onCellKeyPress.enterToNextCell(params);
  }
};

const colDefDefaults = {
  cellClassRules: {
    "cell-not-editable": params => !params.colDef.editable
  },
  enableCellChangeFlash: true,
  enableRowGroup: true,
  floatingFilter: true,
  resizable: true,
  sortable: true,
  suppressKeyboardEvent: ({ event }) => ["Enter"].includes(event.key),
  width: 120
};

export { gridOptions, colDefDefaults };
