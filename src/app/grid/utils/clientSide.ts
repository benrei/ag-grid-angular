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
  editRows: (api, data = [], rowIndex = 0) => {},
  removeRow: (api, data) => {
    api.applyTransaction({ remove: [data] });
  },
  removeRows: (api, data = []) => {
    api.applyTransaction({ remove: data });
  }
};
export default { ...client };
