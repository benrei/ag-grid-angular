const gridOptionsDefaults = {
  autoGroupColumnDef: {
    minWidth: 150
  },
  enableRangeSelection: true,
  enableRangeHandle: true,
  // enableFillHandle: true,
  // frameworkComponents: {},
  rowSelection: "single",
  rowGroupPanelShow: "always"
};
const colDefDefaults = {
  enableRowGroup: true,
  floatingFilter: true,
  width: 100,
  resizable: true,
  sortable: true
};
export { gridOptionsDefaults, colDefDefaults };
