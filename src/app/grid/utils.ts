import { GridApi, RowNode } from "ag-grid-community";

const utils = {
  gridOptions: {
    navigateToNextCell: {
      arrowKeysLeftRight: params => {
        const { key, nextCellPosition, previousCellPosition } = params;
        if (!nextCellPosition) {
          const { column } = previousCellPosition;
          const { gridApi } = column;
          const KEY_LEFT = 37;
          const KEY_RIGHT = 39;
          switch (key) {
            case KEY_LEFT:
              gridApi.tabToPreviousCell();
              gridApi.tabToPreviousCell();
            case KEY_RIGHT:
              gridApi.tabToNextCell();
          }
        }
        return nextCellPosition;
      }
    },
    onCellKeyPress: {
      enterToNextCell: params => {
        const { code, key, shiftKey } = params.event;
        if (shiftKey) {
          if (code == "Enter" || key == "Enter") params.api.tabToPreviousCell();
        } else {
          if (code == "Enter" || key == "Enter") params.api.tabToNextCell();
        }
      }
    }
  }
};

const addRows = (api, data = [], rowIndex) => {
  const res = api.applyTransaction({
    add: [data],
    addIndex: rowIndex
  });
  api.flashCells({
    flashDelay: 1000,
    rowNodes: res.add
  });
};

const selectRow = (api, entityId: string, dataId?: string)=>{
  api.deselectAll(); 
  if (dataId) {
    const node = getRowNodeByEntityId(api, entityId, dataId);
    if (node) {
      node.setSelected(true);
      focus(api,'', node.rowIndex);
      return;
    }
  } else {
    const firstRowNode = api.getDisplayedRowAtIndex(0);
    if (firstRowNode) {
      firstRowNode.setSelected(true);
      focus(api,'', 0);
    }
  }
}

const focus = (api: GridApi, colKey: string, rowIndex?: number)=>{
  if (!rowIndex) {
    const row = api.getSelectedNodes();
    if (row.length === 0) {
    return;
    } 
    rowIndex = row[0].rowIndex; 
  }
  api.ensureIndexVisible(rowIndex);
  api.setFocusedCell(rowIndex, colKey);
}

const getRowNodeByEntityId = (api: GridApi, entityId: string, entityIdName: string): RowNode=>{
  let rowNode: RowNode = null;
  api.forEachNode((node) => {
    if (node.data?.[entityIdName] === entityId) {
      rowNode = node;
      return;
    }
  });
  return rowNode;
}

const getContextMenuItems = params => {
  const { api, value, node } = params;
  const { data, rowIndex } = node;
  // console.log(params);
  const result = [
    {
      name: "Insert above",
      action: function() {
        addRows(api, data, rowIndex > 0 ? rowIndex - 1 : rowIndex);
      },
      tooltip:
        "Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!"
    },
    {
      name: "Insert below",
      action: function() {
        addRows(api, data, rowIndex + 1);
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
};

export default { addRows, getContextMenuItems, ...utils };
