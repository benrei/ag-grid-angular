const columns = [
  {
    field: "country",
    filter: "agTextColumnFilter",
    minWidth: 150,
    cellEditor: "selectBoxEditor",
    cellEditorParams: () => {
      return { values: Array.from(new Set(countries)).sort() };
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
export default columns;


const countries = ["Afghanistan","Algeria","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Barbados","Belarus","Belgium","Botswana","Brazil","Bulgaria","Cameroon","Canada","Chile","China","Chinese Taipei","Colombia","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Dominican Republic","Ecuador","Egypt","Eritrea","Estonia","Ethiopia","Finland","France","Gabon","Georgia","Germany","Great Britain","Greece","Grenada","Guatemala","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Ireland","Israel","Italy","Jamaica","Japan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Latvia","Lithuania","Macedonia","Malaysia","Mauritius","Mexico","Moldova","Mongolia","Montenegro","Morocco","Mozambique","Netherlands","New Zealand","Nigeria","North Korea","Norway","Panama","Paraguay","Poland","Portugal","Puerto Rico","Qatar","Romania","Russia","Saudi Arabia","Serbia","Serbia and Montenegro","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","Sudan","Sweden","Switzerland","Syria","Tajikistan","Thailand","Togo","Trinidad and Tobago","Tunisia","Turkey","Uganda","Ukraine","United Arab Emirates","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Zimbabwe"];