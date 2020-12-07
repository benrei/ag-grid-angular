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
  suppressCopyRowsToClipboard: true,
  // sendToClipboard: (params)=>params.api.copySelectedRangeToClipboard(),
  statusBar: {
    statusPanels: [
      { statusPanel: "agTotalAndFilteredRowCountComponent", align: "left" },
      { statusPanel: "agAggregationComponent" }
    ]
  },
  // stopEditingWhenGridLosesFocus: true,
  // suppressRowClickSelection: true,
  undoRedoCellEditing: true,
  onCellKeyPress: (params) => {
    utils.gridOptions.onCellKeyPress.enterToNextCell(params);
  }
};

export default gridOptions;
