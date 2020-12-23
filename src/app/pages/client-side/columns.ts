import valueParser from "../../grid/gridOptions/valueParser";
const columns = [
  {
    field: "country",
    filter: "agTextColumnFilter",
    minWidth: 150,
    cellEditor: "selectBoxEditor",
    cellEditorParams: {
      valueField: "name",
      labelField: "name",
      endpoint:
        "https://raw.githubusercontent.com/benrei/data/main/countries.json"
    }
    // rowGroup: true
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
    minWidth: 150
    // rowGroup: true
  },
  {
    field: "athlete",
    filter: "agTextColumnFilter",
    minWidth: 150
  },
  {
    field: "gold",
    filter: "agNumberColumnFilter",
    valueParser: valueParser.number,
    aggFunc: "sum"
  },
  {
    field: "silver",
    filter: "agNumberColumnFilter",
    valueParser: valueParser.number,
    aggFunc: "sum"
  },
  {
    field: "bronze",
    filter: "agNumberColumnFilter",
    valueParser: valueParser.number,
    aggFunc: "sum"
  },
  {
    displayName: "total",
    filter: "agNumberColumnFilter",
    valueGetter: ({ data }) =>
      data.gold
        ? Number(data.gold)
        : 0 + data.silver
        ? Number(data.silver)
        : 0 + data.bronze
        ? Number(data.bronze)
        : null,
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
export default columns;
