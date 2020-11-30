const server = {
  addRow: (api, data, rowIndex = 0) => {
    console.log("addRow");
  },
  addRows: (api, data = [], rowIndex = 0) => {},
  editRow: (api, data, rowIndex = 0) => {},
  editRows: (api, data = [], rowIndex = 0) => {},
  removeRow: (api, data, rowIndex = 0) => {},
  removeRows: (api, data, rowIndex = 0) => {}
};
export default { ...server };
