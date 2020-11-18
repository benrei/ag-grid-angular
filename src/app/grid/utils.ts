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

export default { ...utils };
