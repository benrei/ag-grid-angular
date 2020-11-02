const utils = {
  navigation: {
    selectionWithArrowKeys: params => {
      var previousCell = params.previousCellDef;
      var suggestedNextCell = params.nextCellDef;

      var KEY_UP = 38;
      var KEY_DOWN = 40;
      var KEY_LEFT = 37;
      var KEY_RIGHT = 39;

      switch (params.key) {
        case KEY_DOWN:
          previousCell = params.previousCellDef;
          // set selected cell on current cell + 1
          // TODO
          // gridOptions.api.forEachNode(function(node) {
          //   if (previousCell.rowIndex + 1 === node.rowIndex) {
          //     node.setSelected(true);
          //   }
          // });
          return suggestedNextCell;
        case KEY_UP:
          previousCell = params.previousCellDef;
          // set selected cell on current cell - 1
          // TODO
          // gridOptions.api.forEachNode(function(node) {
          //   if (previousCell.rowIndex - 1 === node.rowIndex) {
          //     node.setSelected(true);
          //   }
          // });
          return suggestedNextCell;
        case KEY_LEFT:
        case KEY_RIGHT:
          return suggestedNextCell;
        default:
          throw "this will never happen, navigation is always one of the 4 keys above";
      }
    }
  }
};

export default utils;
