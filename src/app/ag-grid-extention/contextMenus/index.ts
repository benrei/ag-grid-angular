import utils from "../utils";

const contextMenu = params => {
  const { api, node } = params;
  console.log(params);
  const menuItems = [];
  if (node) {
    const { data, rowIndex } = node;
    menuItems.push(
      {
        name: "Insert empty",
        action: function() {
          utils.addRow(api, {}, rowIndex > 0 ? rowIndex - 1 : rowIndex);
        },
        tooltip: "Insert empty row"
      },
      {
        name: "Duplicate",
        action: function() {
          utils.addRow(api, JSON.parse(JSON.stringify(data)), rowIndex + 1);
        },
        tooltip: "Duplicate row"
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
export default contextMenu;
