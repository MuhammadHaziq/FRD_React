import React from "react";
import DataTable from "react-data-table-component";
import SettingsIcon from "@material-ui/icons/Settings";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CloseIcon from "@material-ui/icons/Close";
import OrderForm from "./OrderForm";
import { Grid } from "@material-ui/core";

const data = [
  {
    id: 1,
    Symbol: "AAPL",
    Modified: "1982",
    Status: "134.45",
    Duration: "145.6",
    Last: "143",
    Side: "123",
    Quantity: "-23",
    Filled: "288",
    Remaining: "111",
  },
  {
    id: 2,
    Symbol: "AAPL",
    Modified: "1982",
    Status: "134.45",
    Duration: "145.6",
    Last: "143",
    Side: "123",
    Quantity: "-23",
    Filled: "288",
    Remaining: "111",
  },
  {
    id: 3,
    Symbol: "AAPL",
    Modified: "1982",
    Status: "134.45",
    Duration: "145.6",
    Last: "143",
    Side: "123",
    Quantity: "-23",
    Filled: "288",
    Remaining: "111",
  },
  {
    id: 4,
    Symbol: "AAPL",
    Modified: "1982",
    Status: "134.45",
    Duration: "145.6",
    Last: "143",
    Side: "123",
    Quantity: "-23",
    Filled: "288",
    Remaining: "111",
  },
  {
    id: 5,
    Symbol: "AAPL",
    Modified: "1982",
    Status: "134.45",
    Duration: "145.6",
    Last: "143",
    Side: "123",
    Quantity: "-23",
    Filled: "288",
    Remaining: "111",
  },
  {
    id: 6,
    Symbol: "AAPL",
    Modified: "1982",
    Status: "134.45",
    Duration: "145.6",
    Last: "143",
    Side: "123",
    Quantity: "-23",
    Filled: "288",
    Remaining: "111",
  },
  {
    id: 7,
    Symbol: "AAPL",
    Modified: "1982",
    Status: "134.45",
    Duration: "145.6",
    Last: "143",
    Side: "123",
    Quantity: "-23",
    Filled: "288",
    Remaining: "111",
  },
  {
    id: 8,
    Symbol: "AAPL",
    Modified: "1982",
    Status: "134.45",
    Duration: "145.6",
    Last: "143",
    Side: "123",
    Quantity: "-23",
    Filled: "288",
    Remaining: "111",
  },
];
const columns = [
  {
    name: "Symbol",
    selector: "Symbol",
    sortable: true,
  },
  {
    name: "Modified",
    selector: "Modified",
    sortable: true,
  },
  {
    name: "Status",
    selector: "Status",
    sortable: true,
    right: true,
  },
  {
    name: "Duration",
    selector: "Duration",
    sortable: true,
    right: true,
  },
  {
    name: "Last",
    selector: "Last",
    sortable: true,
    right: true,
  },
  {
    name: "Side",
    selector: "Side",
    sortable: true,
    right: true,
  },
  {
    name: "Quantity",
    selector: "Quantity",
    sortable: true,
    right: true,
  },
  {
    name: "Filled",
    selector: "Filled",
    sortable: true,
    right: true,
  },
  {
    name: "Remaining",
    selector: "Remaining",
    sortable: true,
    right: true,
  },
];

const OrderDatatable = (props) => {
  return (
    <div className="widget-main">
      <div className="widget-head">
        <span className="title"> Orders </span>
        <div className="widget-controls">
          <PresentToAllIcon />
          <SettingsIcon />
          <CheckBoxOutlineBlankIcon />
          <CloseIcon />
        </div>
      </div>
      <div className="widget-body">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <OrderForm />
        </Grid>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default OrderDatatable;
