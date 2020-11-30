const client = {
  addRow: (api, data, rowIndex = 0) => {
    const res = api.applyTransaction({
      add: [data],
      addIndex: rowIndex
    });
    api.flashCells({
      flashDelay: 1000,
      rowNodes: res.add
    });
  },
  addRows: (api, data = [], rowIndex = 0) => {},
  editRow: (api, data, rowIndex = 0) => {},
  editRows: (api, rowNodes = [], rowIndex = 0) => {},
  removeRow: (api, rowNode) => {
    api.applyTransaction({ remove: [rowNode] });
  },
  removeRows: (api, rowNodes = []) => {
    api.applyTransaction({ remove: rowNodes });
  }
};

const getContextMenuItems = params => {
  const { api, node } = params;
  console.log(params);
  const menuItems = [];
  if (node) {
    const { data, rowIndex } = node;
    menuItems.push(
      {
        name: "Insert empty",
        action: function() {
          client.addRow(api, {}, rowIndex > 0 ? rowIndex - 1 : rowIndex);
        },
        tooltip:
          "Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!"
      },
      {
        name: "Duplicate",
        action: function() {
          client.addRow(api, JSON.parse(JSON.stringify(data)), rowIndex + 1);
        },
        tooltip:
          "Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!"
      },
      "separator",
      "copy",
      "paste",
      "separator",
      "chartRange"
    );
  }
  menuItems.push("export");
  return menuItems;
};

export default { ...client, getContextMenuItems };
