import utils from "../utils";
const client = params => {
  const { api, node } = params;
  console.log(params);
  const menuItems = [];
  if (node) {
    const { data, rowIndex } = node;
    menuItems.push(
      {
        name: "Insert empty",
        action: function() {
          utils.client.addRow(api, {}, rowIndex > 0 ? rowIndex - 1 : rowIndex);
        },
        tooltip:
          "Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!"
      },
      {
        name: "Duplicate",
        action: function() {
          utils.client.addRow(
            api,
            JSON.parse(JSON.stringify(data)),
            rowIndex + 1
          );
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


const standard = (params) => {
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

export default { client, standard };
