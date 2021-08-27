import React, { useState } from "react";
import DataTable from "react-data-table-component";
import SettingsIcon from "@material-ui/icons/Settings";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CloseIcon from "@material-ui/icons/Close";
import OpenChainForm from "./OpenChainForm";
import CallsPutsTable from "./CallsPutsTable";
const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

const data = [
  {
    id: 1,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 2,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 3,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 4,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 5,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 6,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 7,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 8,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
];
const columns = [
  {
    name: "Symbol",
    selector: "Symbol",
    sortable: true,
  },
  {
    name: "Description",
    selector: "description",
    sortable: true,
  },
  {
    name: "Price",
    selector: "price",
    sortable: true,
    right: true,
  },
  {
    name: "Last",
    selector: "last",
    sortable: true,
    right: true,
  },
  {
    name: "Bid",
    selector: "bid",
    sortable: true,
    right: true,
    cell: (row) => (
      <a
        onClick={() => {
          console.log("spdjkapsdjpajs");
        }}
      >
        {row.bid}
      </a>
    ),
  },
  {
    name: "Ask",
    selector: "ask",
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
    name: "Change",
    selector: "change",
    sortable: true,
    right: true,
  },
];

const OpenChainDatatable = (props) => {
  const [modelOpen, setModelOpen] = useState(true);
  return (
    <div>
      {modelOpen == true && (
        <div className="widget-main">
          <div className="widget-head">
            <span className="title"> Open Chain </span>
            <div className="widget-controls">
              <PresentToAllIcon />
              <SettingsIcon />
              <CheckBoxOutlineBlankIcon />
              <CloseIcon
                onClick={() => {
                  setModelOpen(false);
                }}
              />
            </div>
          </div>
          <div className="widget-body">
            <OpenChainForm />

            <CallsPutsTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenChainDatatable;
