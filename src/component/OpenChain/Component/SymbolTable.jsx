import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import SelectInput from "../../InputComponents/Component/SelectInput";
import { openChainAction } from "../../../Constants/Constants";
import OpenChainRowPopUp from "./OpenChainRowPopUp";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const handleChange = () => {
  alert("sas");
};
const SymbolTable = (props) => {
  const [popUpData, setPopUpData] = useState({
    stockSymbol: "",
    limitPrice: "",
  });
  const [state, setState] = useState({
    RowPopUp: false,
  });

  const handlePopUpOpen = (e) => {
    setPopUpData({
      ...popUpData,
      limitPrice: e.target.innerHTML,
      stockSymbol: props.stockSymbol,
    });
    setState({ RowPopUp: true });
    console.log(props.stockTrade, "stook");
  };

  const closeModel = () => {
    setState({ ...state, RowPopUp: false });
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Grid container>
          <Grid item sm={2}>
            <span>{""}</span>
            <div> {props.stockSymbol.title}</div>
          </Grid>
          <Grid item sm={8}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  {props.stockTrade ? (
                    <React.Fragment>
                      {" "}
                      <TableCell>Action</TableCell>
                      <TableCell>Quantity</TableCell>
                    </React.Fragment>
                  ) : null}
                  <TableCell>Last</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Chg</TableCell>
                  <TableCell>Chg&nbsp;%</TableCell>
                  <TableCell>Bid</TableCell>
                  <TableCell>Ask</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>Low</TableCell>
                  <TableCell>Mark</TableCell>
                  <TableCell>Volume</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(props.data || []).map((item, index) => (
                  <TableRow key={index}>
                    {props.stockTrade ? (
                      <React.Fragment>
                        <TableCell component="th" scope="row">
                          <SelectInput
                            label={""}
                            selectValue={props.actionValue}
                            handleChange={props.handleChange}
                            menuItems={openChainAction}
                            name="actionValue"
                          />
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {props.quantity}
                        </TableCell>
                      </React.Fragment>
                    ) : null}
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={handlePopUpOpen}
                    >
                      {Number(item.last).toLocaleString("en-US")}
                    </TableCell>
                    <TableCell onClick={handlePopUpOpen}>
                      {Number(item.price).toLocaleString("en-US")}
                    </TableCell>
                    <TableCell>
                      {Number(item.chg).toLocaleString("en-US")}
                    </TableCell>
                    <TableCell>
                      {Number(item.chgPer).toLocaleString("en-US")}
                    </TableCell>
                    <TableCell onClick={handlePopUpOpen}>
                      {Number(item.bid).toLocaleString("en-US")}
                    </TableCell>
                    <TableCell onClick={handlePopUpOpen}>
                      {Number(item.ask).toLocaleString("en-US")}
                    </TableCell>
                    <TableCell>
                      {Number(item.high).toLocaleString("en-US")}
                    </TableCell>
                    <TableCell>
                      {Number(item.low).toLocaleString("en-US")}
                    </TableCell>
                    <TableCell>
                      {Number(item.mark).toLocaleString("en-US")}
                    </TableCell>
                    <TableCell>
                      {Number(item.volume).toLocaleString("en-US")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>{" "}
          </Grid>
        </Grid>
      </TableContainer>
      {state.RowPopUp && (
        <OpenChainRowPopUp
          popUpData={popUpData}
          closeModel={closeModel}
          RowPopUp={state.RowPopUp}
        />
      )}
    </React.Fragment>
  );
};
export default SymbolTable;
