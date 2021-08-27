import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import PlaceNewOrder from "./PlaceNewOrder";
import { Children } from "react";

const OpenChainRowPopUp = (props) => {
  return (
    <div>
      <Dialog
        open={props.RowPopUp}
        onClose={(props.closeModel, "backdropclick")}
        backdropClick={true}
        style={{ width: "100%" }}
      >
        <div className="widget-head" style={{ paddingTop: "5px" }}>
          <span className="title"> Place new order</span>
          <div className="widget-controls">
            <CloseIcon onClick={props.closeModel} />
          </div>
        </div>
        <div
          style={{
            minHeight: "400px",
            marginTop: "20px",
            padding: "10px",
          }}
        >
          {props.children}
          <PlaceNewOrder {...props} />
        </div>
      </Dialog>
    </div>
  );
};

export default OpenChainRowPopUp;
