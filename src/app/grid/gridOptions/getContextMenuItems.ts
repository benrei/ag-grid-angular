import {client} from "../utils;
const standard = (params) => {
  const { api, node } = params;
  console.log(params);
  const menuItems = [];
  if (node) {
    const { data, rowIndex } = node;
    menuItems.push(
      {
        name: "Insert empty",
        action: function () {
          client.addRow(api, {}, rowIndex > 0 ? rowIndex - 1 : rowIndex);
        },
        tooltip:
          "Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!"
      },
      {
        name: "Duplicate",
        action: function () {
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

export = {standard}