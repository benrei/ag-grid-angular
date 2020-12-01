export default [
  {
    field: "assignment.assignmentNumber",
    colId: 'colID for: assignment.assignmentNumber',
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
    filter: "agNumberColumnFilter"
  },
  {
    field: "costPrice",
    filter: "agNumberColumnFilter"
  },
  {
    filter: "agNumberColumnFilter",
    headerName: "Beløp",
    valueGetter: ({ data }) => data?.quantity * data?.costPrice,
    editable: false,
    // cellRenderer: params => params.data.quantity * params.data.costPrice,
    type: "numericColumn",
    valueFormatter:
      'value.toFixed(2).replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1 ")'
  }
];
