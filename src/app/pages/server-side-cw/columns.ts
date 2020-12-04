const columns = [
  { field: "serviceId" },
  {
    field: "assignment.assignmentNumber",
    filter: "agNumberColumnFilter",
    sort: "asc"
  },
  { field: "startDateTimeUTC", filter: "agDateColumnFilter" },
  {
    field: "wageCode.combined_WageCodeNumber_WageCodeName",
    filter: "agTextColumnFilter"
  },
  { field: "serviceComment", filter: "agTextColumnFilter" },
  {
    field: "quantity",
    filter: "agNumberColumnFilter",
    type: "numericColumn"
  },
  {
    field: "costPrice",
    filter: "agNumberColumnFilter",
    aggFunc: "sum",
    type: "numericColumn"
  },
  {
    filter: "agNumberColumnFilter",
    headerName: "Beløp",
    valueGetter: "data.quantity * data.costPrice",
    editable: false,
    // cellRenderer: params => params.data.quantity * params.data.costPrice,
    type: "numericColumn",
    valueFormatter:
      'value.toFixed(2).replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1 ")'
  }
];
export default columns;
