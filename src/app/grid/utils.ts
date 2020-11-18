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
        // const { rowIndex } = params.api.getFocusedCell();
        // if (rowIndex !== params.rowIndex) {
        //   selectRow(params.api, rowIndex);
        // }
      }
    }
  }
};
const selectRow = (api, rowIndex) => {
  api.forEachNode(function(node) {
    console.log("forEachNode");
    if (rowIndex === node.rowIndex) {
      node.setSelected(true);
    }
  });
};

export default { ...utils, selectRow };
