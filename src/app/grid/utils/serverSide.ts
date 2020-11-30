const server = {
  addRow: (api, row) => {
    console.log("addRow");
  },
  addRows: (api, rows = []) => {},
  editRow: (api, row) => {},
  editRows: (api, rows = []) => {},
  removeRow: (api, row) => {},
  removeRows: (api, rows) => {}
};
export default { server };
