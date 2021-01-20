const utils = {
  addRow: (api, data, rowIndex = 0) => {
    api.deselectAll();
    api.clearRangeSelection();
    api.clearFocusedCell();
    const res = api.applyTransaction({
      add: [data],
      addIndex: rowIndex
    });
    api.flashCells({
      flashDelay: 1000,
      rowNodes: res.add
    });
    const colKey = api.getColumnDefs().find(c => !c.hide && !c.lockVisible)
      .colId;
    setTimeout(() => {
      api.startEditingCell({ rowIndex, colKey });
    }, 50);
  },
  addRows: (api, data = [], rowIndex = 0) => {},
  editRow: (api, data, rowIndex = 0) => {},
  editRows: (api, rowNodes = [], rowIndex = 0) => {},
  removeRow: (api, rowNode) => {
    api.applyTransaction({ remove: [rowNode] });
  },
  removeRows: (api, rowNodes = []) => {
    api.applyTransaction({ remove: rowNodes });
  },
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
          if (code == "Enter" || key == "Enter") {
            params.api.stopEditing();
            params.api.tabToPreviousCell();
          }
        } else {
          if (code == "Enter" || key == "Enter") {
            params.api.stopEditing();
            params.api.tabToNextCell();
          }
        }
      }
    }
  }
};

export default utils;
