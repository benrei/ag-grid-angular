import { GridApi, RowNode } from "ag-grid-community";
import server from './serverSide';
import client from './clientSide';

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

const selectRow = (api, entityIdField?: string, entityIdValue?: string)=>{
  api.deselectAll(); 
  if (entityIdField && entityIdValue) {
    getRowNodeByEntityId(api, entityIdField, entityIdValue)?.setSelected(true);
  } else {
    api.getDisplayedRowAtIndex(0)?.setSelected(true);
  }
}

const getRowNodeByEntityId = (api: GridApi, entityIdField: string, entityIdValue: string): RowNode=>{
  let rowNode: RowNode = null;
  api.forEachNode((node) => {
    if (node.data?.[entityIdField] === entityIdValue) {
      rowNode = node;
      return;
    }
  });
  return rowNode;
}
const getGroupRoute = (node: any)=> {
  let array = [];
  const getRoute = (parent: any) => {
    if (parent.level > 0 && parent.parent) {
      getRoute(parent.parent);
    }
    array.push(parent.key);
  };
  getRoute(node.parent);
  return array;
}

const getContextMenuItems = params => {
  const { api, node } = params;
  console.log(params);
  const menuItems = [];
  if (node) {
    menuItems.push(
      "copy",
      "paste",
      "separator",
      "chartRange"
    );
  }
  menuItems.push("export");
  return menuItems;
};

export default { client, server, addRows, getContextMenuItems, getGroupRoute, selectRow, ...utils };
