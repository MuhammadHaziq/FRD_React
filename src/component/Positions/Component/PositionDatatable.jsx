import React, { useState } from "react";
import DataTable from "react-data-table-component";
import SettingsIcon from "@material-ui/icons/Settings";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, FormControl, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AutoCompleteInput from "../../InputComponents/Component/AutoCompleteInput";

const data = [
  {
    id: 1,
    Symbol: "AAPL",
    ChangePer: "1982",
    last: "134.45",
    prevClose: "145.6",
    quantity: "143",
    avgOpenPrice: "123",
    marketValue: "-23",
    plPer: "-23",
    select: "-23",
  },
  {
    id: 2,
    Symbol: "AAPL",
    ChangePer: "1982",
    last: "134.45",
    prevClose: "145.6",
    quantity: "143",
    avgOpenPrice: "123",
    marketValue: "-23",
    plPer: "-23",
    select: "-23",
  },
  {
    id: 3,
    Symbol: "AAPL",
    ChangePer: "1982",
    last: "134.45",
    prevClose: "145.6",
    quantity: "143",
    avgOpenPrice: "123",
    marketValue: "-23",
    plPer: "-23",
    select: "-23",
  },
  {
    id: 4,
    Symbol: "AAPL",
    ChangePer: "1982",
    last: "134.45",
    prevClose: "145.6",
    quantity: "143",
    avgOpenPrice: "123",
    marketValue: "-23",
    plPer: "-23",
    select: "-23",
  },
  {
    id: 5,
    Symbol: "AAPL",
    ChangePer: "1982",
    last: "134.45",
    prevClose: "145.6",
    quantity: "143",
    avgOpenPrice: "123",
    marketValue: "-23",
    plPer: "-23",
    select: "-23",
  },
  {
    id: 6,
    Symbol: "AAPL",
    ChangePer: "1982",
    last: "134.45",
    prevClose: "145.6",
    quantity: "143",
    avgOpenPrice: "123",
    marketValue: "-23",
    plPer: "-23",
    select: "-23",
  },
  {
    id: 7,
    Symbol: "AAPL",
    ChangePer: "1982",
    last: "134.45",
    prevClose: "145.6",
    quantity: "143",
    avgOpenPrice: "123",
    marketValue: "-23",
    plPer: "-23",
    select: "-23",
  },
  {
    id: 8,
    Symbol: "AAPL",
    ChangePer: "1982",
    last: "134.45",
    prevClose: "145.6",
    quantity: "143",
    avgOpenPrice: "123",
    marketValue: "-23",
    plPer: "-23",
    select: "-23",
  },
];
const columns = [
  {
    name: "Symbol",
    selector: "Symbol",
    sortable: true,
  },
  {
    name: "Change %",
    selector: "ChangePer",
    sortable: true,
  },
  {
    name: "Last",
    selector: "last",
    sortable: true,
    right: true,
  },
  {
    name: "PrevClose",
    selector: "prevClose",
    sortable: true,
    right: true,
  },
  {
    name: "Quantity",
    selector: "quantity",
    sortable: true,
    right: true,
  },
  {
    name: "Avg Open Price",
    selector: "avgOpenPrice",
    sortable: true,
    right: true,
  },
  {
    name: "Change",
    selector: "change",
    sortable: true,
    right: true,
  },
  {
    name: "Market Value",
    selector: "marketValue",
    sortable: true,
    right: true,
  },
  {
    name: "P/L %",
    selector: "plPer",
    sortable: true,
    right: true,
  },
  {
    name: "Select",
    selector: "select",
    sortable: true,
    right: true,
  },
];
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  typo: {
    float: "right",
    marginTop: "25px",
  },
}));
function PositionDatatable(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    stockSymbol: null,
  });
  function handleChangeAutoComplete({ name, value }) {
    setState({
      ...state,
      [name]: value,
    });
  }
  return (
    <div className="widget-main positions-main">
      <div className="widget-head">
        <span className="title"> Positions </span>
        <div className="widget-controls">
          <PresentToAllIcon />
          <SettingsIcon />
          <CheckBoxOutlineBlankIcon />
          <CloseIcon />
        </div>
      </div>
      <div className="widget-body">
        <div className="positions-form">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={2}>
              <FormControl variant="standard" className={classes.formControl}>
                <AutoCompleteInput
                  label={"Symbol"}
                  variant="standard"
                  name="stockSymbol"
                  value={state.stockSymbol}
                  handleChangeAutoComplete={handleChangeAutoComplete}
                />
              </FormControl>
            </Grid>
            <Grid item xs={10}>
              <Typography className={classes.typo}>
                Realized Daily P/L: 0.00 (0.00%) P/L Open: -13,353.00 (-23.01%)
                Market Value: 44,667.00
              </Typography>
            </Grid>
          </Grid>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default PositionDatatable;
