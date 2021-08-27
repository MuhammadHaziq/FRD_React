import React, { useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, Button } from "@material-ui/core";
import TradeTicketForm from "./TradeTicketForm";
import TradeTicketDatatable from "./TradeTicketDatatable";
import PlaceNewOrder from "./../../OpenChain/Component/PlaceNewOrder";

function TradeTickets(props) {
  const [state, setState] = useState({
    stockSymbol: { title: "", symbol: "" },
    selectStrategy: "",
    orderType: "",
    comment: "",
    selectDuration: "",
    limitPrice: "",
    extendedHour: "",
    exchange: "",
    placementCondition: false,
    checkAll: false,
    placementStockSymbol: null,
    type: "",
    condition: "",
    threshold: "",
  });

  return (
    <React.Fragment>
      <div className="widget-main trade-tickets-main">
        <div className="widget-head">
          <span className="title"> Trade Tickets </span>
          <div className="widget-controls">
            <PresentToAllIcon />
            <SettingsIcon />
            <CheckBoxOutlineBlankIcon />
            <CloseIcon />
          </div>
          <PlaceNewOrder popUpData={state} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default TradeTickets;
