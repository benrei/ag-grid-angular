const colDefDefaults = {
  cellClassRules: {
    "cell-not-editable": (params) => !params.colDef.editable
  },
  enableCellChangeFlash: true,
  enableRowGroup: true,
  floatingFilter: true,
  resizable: true,
  sortable: true,
  suppressKeyboardEvent: ({ event }) => ["Enter"].includes(event.key),
  width: 120
};
export default colDefDefaults;
