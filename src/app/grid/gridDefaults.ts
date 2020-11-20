import utils from "./utils";
const gridOptionsDefaults = {
  autoGroupColumnDef: {
    minWidth: 150
  },
  enableCharts: true,
  enableRangeSelection: true,
  enableRangeHandle: true,
  // enableFillHandle: true,
  // enterMovesDown: true,
  // frameworkComponents: {},
  getContextMenuItems: params => {
    const { api, value, node } = params;
    const { data, rowIndex } = node;
    console.log(params);
    const result = [
      {
        name: "Insert above",
        action: function() {
          utils.addRows(api, data, rowIndex > 0 ? rowIndex - 1 : rowIndex);
        },
        tooltip:
          "Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!"
      },
      {
        name: "Insert under",
        action: function() {
          utils.addRows(api, data, rowIndex + 1);
        },
        tooltip:
          "Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!"
      },
      "separator",
      "copy",
      "export",
      "separator",
      "chartRange"
    ];
    return result;
  },
  navigateToNextCell: utils.gridOptions.navigateToNextCell.arrowKeysLeftRight,
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
  resizable: true,
  sortable: true,
  suppressKeyboardEvent: ({ event }) => ["Enter"].includes(event.key),
  width: 120
};

export { gridOptionsDefaults, colDefDefaults };
