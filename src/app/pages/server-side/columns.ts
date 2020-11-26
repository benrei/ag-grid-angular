const buildColumns = rowData => [
  {
    field: "country",
    filter: "agTextColumnFilter",
    minWidth: 150,
    cellEditor: "selectBoxEditor",
    cellEditorParams: () => {
      const contries = rowData.map(e => e.country);
      return { values: Array.from(new Set(contries)).sort() };
    },
    rowGroup: true
  },
  {
    field: "year",
    filter: "agNumberColumnFilter",
    minWidth: 150,
    valueParser: ({ newValue }) => Number(newValue)
  },
  {
    field: "sport",
    filter: "agTextColumnFilter",
    minWidth: 150,
    rowGroup: true
  },
  {
    field: "athlete",
    filter: "agTextColumnFilter",
    cellEditor: "ngSelectBoxEditor",
    minWidth: 150
  },
  {
    field: "gold",
    filter: "agNumberColumnFilter",
    aggFunc: "sum",
    valueParser: ({ newValue }) => Number(newValue)
  },
  {
    field: "silver",
    filter: "agNumberColumnFilter",
    aggFunc: "sum",
    valueParser: ({ newValue }) => Number(newValue)
  },
  {
    field: "bronze",
    filter: "agNumberColumnFilter",
    aggFunc: "sum",
    valueParser: ({ newValue }) => Number(newValue)
  },
  {
    displayName: "total",
    filter: "agNumberColumnFilter",
    valueGetter: ({ data }) => data.gold + data.silver + data.bronze,
    aggFunc: "sum",
    editable: false
  },
  { field: "age", filter: "agNumberColumnFilter" },
  {
    field: "date",
    filter: "agDateColumnFilter",
    minWidth: 140,
    cellEditor: "datepickerEditor"
  }
];
export default buildColumns;
