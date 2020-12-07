import server from "./serverSide";
import client from "./clientSide";

const utils = {
  gridOptions: {
    navigateToNextCell: {
      arrowKeysLeftRight: (params) => {
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
      enterToNextCell: (params) => {
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

const getContextMenuItems = (params) => {
  const { api, node } = params;
  console.log(params);
  // .copySelectedRangeToClipboard()
  const menuItems = [];
  const copySelectedRangeToClipboard = {
    name: "Copy selected cell(s)",
    icon: '<span class="ag-icon ag-icon-copy"></span>',
    action: () => api.copySelectedRangeToClipboard()
  };
  if (node) {
    menuItems.push(
      // copySelectedRangeToClipboard,
      "copy",
      "paste",
      "separator",
      "chartRange"
    );
  }
  menuItems.push("export");
  return menuItems;
};

const unflatten = (obj: any) => {
  var result = {};
  for (const key in obj) {
    var keys = key.split(".");
    keys.reduce(function (acc, curVal, i) {
      return (
        acc[curVal] ||
        (acc[curVal] = isNaN(Number(keys[i + 1]))
          ? keys.length - 1 == i
            ? obj[key]
            : {}
          : [])
      );
    }, result);
  }
  return result;
};
const unflattenMany = (data: [any]) => data.map((obj) => unflatten(obj));

export default {
  client,
  server,
  getContextMenuItems,
  unflatten,
  unflattenMany,
  ...utils
};
