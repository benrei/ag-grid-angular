const colDefDefaults = {
  cellClassRules: {
    "cell-not-editable": params => !params.colDef.editable
  },
  cellStyle: ({ value }) =>
    typeof value === "number" ? { textAlign: "right" } : null,
  enableCellChangeFlash: true,
  enableRowGroup: true,
  floatingFilter: true,
  // keyCreator only works client side
  keyCreator: ({ value }) => {
    // console.log(value);
    switch (value) {
      case null:
        return "NULL";
      case undefined:
        return "undefined";
      default:
        return value;
    }
  },
  resizable: true,
  sortable: true,
  suppressKeyboardEvent: ({ event }) => ["Enter"].includes(event.key),
  width: 120
};
export default colDefDefaults;
