const colDefDefaults = {
  cellClassRules: {
    "cell-not-editable": params => !params.colDef.editable
  },
  cellStyle: params =>
    typeof params.value === "number" ? { textAlign: "right" } : null,
  enableCellChangeFlash: true,
  enableRowGroup: true,
  floatingFilter: true,
  resizable: true,
  sortable: true,
  suppressKeyboardEvent: ({ event }) => ["Enter"].includes(event.key),
  width: 120
};
export default colDefDefaults;
