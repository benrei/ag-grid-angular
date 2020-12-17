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

export default { ...client };
