const utils = {
  gridOptions: {
    navigateToNextCell: {
      selectionWithArrowKeys: params => {
        const { nextCellPosition, previousCellPosition } = params;
        const { column } = previousCellPosition;
        const { gridApi } = column;

        const KEY_UP = 38;
        const KEY_DOWN = 40;
        const KEY_LEFT = 37;
        const KEY_RIGHT = 39;

        switch (params.key) {
          case KEY_DOWN:
            // set selected cell on current cell + 1
            gridApi.forEachNode(function(node) {
              if (previousCellPosition.rowIndex + 1 === node.rowIndex) {
                node.setSelected(true);
              }
            });
            return nextCellPosition;
          case KEY_UP:
            // set selected cell on current cell - 1
            gridApi.forEachNode(function(node) {
              if (previousCellPosition.rowIndex - 1 === node.rowIndex) {
                node.setSelected(true);
              }
            });
            return nextCellPosition;
          case KEY_LEFT:
          case KEY_RIGHT:
            return nextCellPosition;
          default:
            throw "this will never happen, navigation is always one of the 4 keys above";
        }
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
        const { rowIndex } = params.api.getFocusedCell();
        if (rowIndex !== params.rowIndex) {
          // Update selected row
          params.api.forEachNode(function(node) {
            if (rowIndex === node.rowIndex) {
              node.setSelected(true);
            }
          });
        }
      }
    }
  }
};

export default utils;
