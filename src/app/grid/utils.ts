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

        const selectDown = cellPosition => {
          const { column } = cellPosition;
          const { gridApi } = column;
          // set selected cell on current cell + 1
          gridApi.forEachNode(function(node) {
            if (previousCellPosition.rowIndex + 1 === node.rowIndex) {
              node.setSelected(true);
            }
          });
        };

        const selectUp = cellPosition => {
          const { column } = cellPosition;
          const { gridApi } = column;
          // set selected cell on current cell - 1
          gridApi.forEachNode(function(node) {
            if (previousCellPosition.rowIndex - 1 === node.rowIndex) {
              node.setSelected(true);
            }
          });
        };
        switch (params.key) {
          case KEY_DOWN:
            selectDown(previousCellPosition);
            return nextCellPosition;
          case KEY_UP:
            selectUp(previousCellPosition);
            return nextCellPosition;
          case KEY_LEFT:
            if (!nextCellPosition) {
              gridApi.tabToPreviousCell();
              selectUp(previousCellPosition);
            }
            return nextCellPosition;
          case KEY_RIGHT:
            if (!nextCellPosition) {
              gridApi.tabToNextCell();
              selectDown(previousCellPosition);
            }
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
// selectionWithArrowKeys: params => {
//   const { nextCellPosition, previousCellPosition } = params;
//   const { column } = previousCellPosition;
//   const { gridApi } = column;

//   const KEY_UP = 38;
//   const KEY_DOWN = 40;
//   const KEY_LEFT = 37;
//   const KEY_RIGHT = 39;

//   switch (params.key) {
//     case KEY_DOWN:
//       // set selected cell on current cell + 1
//       gridApi.forEachNode(function(node) {
//         if (previousCellPosition.rowIndex - 1 === node.rowIndex) {
//           console.log(previousCellPosition.rowIndex);
//           console.log(node.rowIndex);
//           node.setSelected(true);
//         }
//       });
//     case KEY_UP:
//       // set selected cell on current cell - 1
//       gridApi.forEachNode(function(node) {
//         if (previousCellPosition.rowIndex - 1 === node.rowIndex) {
//           node.setSelected(true);
//         }
//       });
//     case KEY_LEFT:
// if (!nextCellPosition) {
//   console.log("KEY_LEFT");
//   gridApi.tabToPreviousCell();
//   // gridApi.forEachNode(function(node) {
//   //   if (previousCellPosition.rowIndex - 1 === node.rowIndex) {
//   //     node.setSelected(true);
//   //   }
//   // });
// }
//     case KEY_RIGHT:
//     default:
//   }
//   return nextCellPosition;
// }
