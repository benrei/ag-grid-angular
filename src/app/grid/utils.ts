const utils = {
  gridOptions: {
    navigateToNextCell: {
      selectionWithArrowKeys: (params, gridApi) => {
        const { nextCellPosition, previousCellPosition } = params;

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
    }
  }
};

export default utils;
