import utils from "../utils";
import contextMenu from "./getContextMenuItems";

const gridOptions = {
  autoGroupColumnDef: {
    minWidth: 150
  },
  enableCharts: true,
  enableRangeSelection: true,
  enableRangeHandle: true,
  // enableFillHandle: true,
  // enterMovesDown: true,
  // allowContextMenuWithControlKey: true,
  getContextMenuItems: contextMenu.standard,
  navigateToNextCell: utils.gridOptions.navigateToNextCell.arrowKeysLeftRight,
  rowSelection: "single",
  rowGroupPanelShow: "always",
  sideBar: true,
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
  onCellKeyPress: params => {
    utils.gridOptions.onCellKeyPress.enterToNextCell(params);
  }
};

export default gridOptions;
