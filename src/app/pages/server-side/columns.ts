const buildColumns = rowData => [
  {
    field: "country",
    filter: "agTextColumnFilter",
    minWidth: 150,
    cellEditor: "selectBoxEditor",
    cellEditorParams: () => {
      const contries = rowData.map(e => e.country);
      return { values: Array.from(new Set(contries)).sort() };
    }
  },
  { field: "year", filter: "agNumberColumnFilter", minWidth: 150 },
  { field: "sport", filter: "agTextColumnFilter", minWidth: 150 },
  {
    field: "athlete",
    filter: "agTextColumnFilter",
    cellEditor: "ngSelectBoxEditor",
    minWidth: 150
  },
  { field: "gold", filter: "agNumberColumnFilter" },
  { field: "silver", filter: "agNumberColumnFilter" },
  { field: "bronze", filter: "agNumberColumnFilter" },
  { field: "total", filter: "agNumberColumnFilter", editable: false },
  { field: "age", filter: "agNumberColumnFilter" },
  {
    field: "date",
    filter: "agDateColumnFilter",
    minWidth: 140,
    cellEditor: "datepickerEditor"
  }
];
export default buildColumns;
