import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import { Grid, FormControl } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AutoCompleteInput from "../../InputComponents/Component/AutoCompleteInput";
import NumberInput from "../../InputComponents/Component/NumberInput";
import DateInput from "../../InputComponents/Component/DateInput";
import AutoCompleteInputCustom from "../../InputComponents/Component/AutoCompleteInputCustom";
import Input from "../../InputComponents/Component/Input";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "80%",
  },
  table: {
    minWidth: "90%",
  },
  gridItem: {
    textAlign: "center",
  },
}));

const orderType = [{ title: "Market" }, { title: "limit" }];
const duration = [{ title: "day" }, { title: "gtc" }, { title: "gtd" }];
const extendedHours = [
  { title: "Auto" },
  { title: "Reguler" },
  { title: "Pre-Market Only" },
  { title: "Post-Market Only" },
  { title: "Pre-Market and reguler" },
  { title: "Reguler and Post-Market" },
  { title: "Pre-Market and Post-Market" },
  { title: "All sessions" },
];
const exchange = [
  { title: "ARCA" },
  { title: "AUTO" },
  { title: "BATS" },
  { title: "EDGX" },
  { title: "KNIGHT" },
  { title: "MNGD" },
  { title: "NSDQ" },
  { title: "NYSE" },
  { title: "VIRTEX" },
];
const condition = [{ title: "less or equal" }, { title: "greater or equal" }];
const type = [{ title: "last" }, { title: "bid" }, { title: "ask" }];
const side = [
  { title: "Buy" },
  { title: "Sell" },
  { title: "Sell Short" },
  { title: "Buy To Cover" },
];
const tableData = [
  {
    last: 364.25,
    price: 363.68,
    chg: -3.59,
    chgPer: -0.98,
    bid: 360.9,
    ask: 364.0,
    high: 369.96,
    low: 363.75,
    mark: 364.24,
    volume: 3268283,
  },
];
const PlaceNewOrder = (props) => {
  const classes = new useStyles();
  const [modelOpen, setModelOpen] = useState(true);

  const { limitPrice } = props.popUpData.limitPrice;
  const [state, setState] = useState({
    stockSymbol: { title: props.popUpData.stockSymbol.title, year: "" },
    side: "",
    share: 100,
    orderType: "",
    limitPrice: props.popUpData.limitPrice,
    comment: "",
    stockTrade: false,
    duration: "",
    extendedHours: "",
    exchange: "",
  });

  const [placementCondition, setPlacementCondition] = useState({
    haveCondition: false,
    stockSymbol: null,
    type: "",
    Condition: "",
    threshold: 0.1,
  });

  const handleChangeAutoComplete = ({ name, value }) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };
  const handleChangeAutoCompleteCondition = ({ name, value }) => {
    setPlacementCondition({
      ...placementCondition,
      [name]: value,
    });
  };
  const handleChangeCondition = (event) => {
    const { name, value } = event.target;
    setPlacementCondition({ ...placementCondition, [name]: value });
  };
  const [radioBtnValue, setRadioBtnValue] = React.useState("normal");

  const handleRadioBtnChange = (event) => {
    setRadioBtnValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={3} className={classes.gridItem}>
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
        <Grid item xs={12} sm={3} className={classes.gridItem}>
          <FormControl variant="standard" className={classes.formControl}>
            <NumberInput
              id="filled-number"
              label="Share"
              type="number"
              name="share"
              value={state.share}
              variant="filled"
              handleChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.gridItem}>
          <div></div>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.gridItem}>
          <FormControl variant="standard" className={classes.formControl}>
            <AutoCompleteInputCustom
              label={"Side"}
              options={side}
              variant="standard"
              name="side"
              value={state.side}
              handleChangeAutoComplete={handleChangeAutoComplete}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.gridItem}>
          <FormControl variant="standard" className={classes.formControl}>
            <AutoCompleteInputCustom
              label={"Order Type"}
              options={orderType}
              variant="standard"
              name="orderType"
              value={state.orderType}
              handleChangeAutoComplete={handleChangeAutoComplete}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} className={classes.gridItem}>
          <FormControl variant="standard" className={classes.formControl}>
            <NumberInput
              id="filled-number"
              label="Limit Price"
              type="number"
              name="limitPrice"
              value={state.limitPrice}
              inputProps={{ step: "0.01" }}
              variant="filled"
              handleChange={handleChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} className={classes.gridItem}>
          <FormControl variant="standard" className={classes.formControl}>
            <Input
              id="filled-number"
              label="Comment"
              type="text"
              name="comment"
              value={state.comment}
              variant="filled"
              handleChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2} className={classes.gridItem}>
          <div></div>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.gridItem}>
          <FormControl variant="standard" className={classes.formControl}>
            <AutoCompleteInputCustom
              label={"Duration"}
              options={duration}
              variant="standard"
              name="duration"
              value={state.duration}
              handleChangeAutoComplete={handleChangeAutoComplete}
            />
          </FormControl>
        </Grid>
        {state.duration.title == "gtd" && (
          <Grid item xs={12} sm={3} className={classes.gridItem}>
            <FormControl variant="standard" className={classes.formControl}>
              <DateInput />
            </FormControl>
          </Grid>
        )}
        <Grid item xs={12} sm={3} className={classes.gridItem}>
          <FormControl variant="standard" className={classes.formControl}>
            <AutoCompleteInputCustom
              label={"ExtendedHours"}
              options={extendedHours}
              variant="standard"
              name="extendedHours"
              value={state.extendedHours}
              handleChangeAutoComplete={handleChangeAutoComplete}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.gridItem}>
          <FormControl variant="standard" className={classes.formControl}>
            <AutoCompleteInputCustom
              label={"Exchange"}
              options={exchange}
              variant="standard"
              name="exchange"
              value={state.exchange}
              handleChangeAutoComplete={handleChangeAutoComplete}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
            }
            label="All or none"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControlLabel
            control={
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                onChange={(e) => {
                  setPlacementCondition({
                    ...placementCondition,
                    haveCondition: e.target.checked,
                  });
                }}
              />
            }
            label="Placement condition"
            labelPlacement="end"
          />
        </Grid>

        {placementCondition.haveCondition && (
          <React.Fragment>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <FormControl variant="standard" className={classes.formControl}>
                <AutoCompleteInput
                  label={"Symbol"}
                  variant="standard"
                  name="stockSymbol"
                  value={state.stockSymbol}
                  handleChangeAutoComplete={handleChangeAutoCompleteCondition}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <FormControl variant="standard" className={classes.formControl}>
                <AutoCompleteInputCustom
                  label={"Type"}
                  options={type}
                  variant="standard"
                  name="type"
                  value={placementCondition.type}
                  handleChangeAutoComplete={handleChangeAutoCompleteCondition}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <FormControl variant="standard" className={classes.formControl}>
                <AutoCompleteInputCustom
                  label={"Condition"}
                  options={condition}
                  variant="standard"
                  name="condition"
                  value={placementCondition.exchange}
                  handleChangeAutoComplete={handleChangeAutoCompleteCondition}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <FormControl variant="standard" className={classes.formControl}>
                <NumberInput
                  id="filled-number"
                  label="Threshold"
                  type="number"
                  name="threshold"
                  value={placementCondition.threshold}
                  inputProps={{ step: "0.01" }}
                  variant="filled"
                  handleChange={handleChangeCondition}
                />
              </FormControl>
            </Grid>
          </React.Fragment>
        )}

        <Grid item xs={12} sm={12} className={classes.gridItem}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            size="small"
          >
            Buy
          </Button>{" "}
          <Button
            variant="contained"
            color="secoundary"
            component="span"
            size="small"
          >
            Sell
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} className={classes.gridItem}>
          <React.Fragment>
            <TableContainer component={Paper}>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Symbol</TableCell>
                    <TableCell>Last</TableCell>
                    <TableCell>Chg</TableCell>

                    <TableCell>Bid</TableCell>
                    <TableCell>Ask</TableCell>
                    <TableCell>Volume</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(tableData || []).map((item, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {state.stockSymbol.title}
                      </TableCell>

                      <TableCell component="th" scope="row">
                        {Number(item.last).toLocaleString("en-US")}
                      </TableCell>

                      <TableCell>
                        {Number(item.chg).toLocaleString("en-US")}
                      </TableCell>

                      <TableCell>
                        {Number(item.bid).toLocaleString("en-US")}
                      </TableCell>
                      <TableCell>
                        {Number(item.ask).toLocaleString("en-US")}
                      </TableCell>

                      <TableCell>
                        {Number(item.volume).toLocaleString("en-US")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>{" "}
            </TableContainer>
          </React.Fragment>
        </Grid>
        <Grid item xs={12} sm={7} className={classes.gridItem}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          className={classes.gridItem}
          style={{ textAlign: "end" }}
        >
          <RadioGroup
            style={{ display: "inherit" }}
            aria-label="gender"
            name="radiobtns"
            value={radioBtnValue}
            onChange={handleRadioBtnChange}
          >
            {" "}
            <FormControlLabel
              value="simple"
              control={<Radio />}
              label="Simple"
            />
            <FormControlLabel value="oto" control={<Radio />} label="OTO" />
            <FormControlLabel value="oco" control={<Radio />} label="OCO" />
          </RadioGroup>
        </Grid>

        {radioBtnValue == "oto" && (
          <React.Fragment>
            <Grid item sm={12}>
              <h5>
                If the first order is executed, then the other order is
                automatically triggered
              </h5>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
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
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <div></div>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <div></div>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <div></div>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <FormControl variant="standard" className={classes.formControl}>
                <AutoCompleteInputCustom
                  label={"Order Type"}
                  options={orderType}
                  variant="standard"
                  name="orderType"
                  value={state.orderType}
                  handleChangeAutoComplete={handleChangeAutoComplete}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <FormControl variant="standard" className={classes.formControl}>
                <Input
                  id="filled-number"
                  label="Comment"
                  type="text"
                  name="comment"
                  value={state.comment}
                  variant="filled"
                  handleChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <div></div>
            </Grid>{" "}
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <div></div>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <FormControl variant="standard" className={classes.formControl}>
                <AutoCompleteInputCustom
                  label={"Duration"}
                  options={duration}
                  variant="standard"
                  name="duration"
                  value={state.duration}
                  handleChangeAutoComplete={handleChangeAutoComplete}
                />{" "}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                  />
                }
                label="All or none"
                labelPlacement="end"
              />
            </Grid>
          </React.Fragment>
        )}
        {radioBtnValue == "oco" && (
          <React.Fragment>
            <Grid item sm={12}>
              <h5>
                If one order is executed, then the other order is automatically
                canceled
              </h5>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
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
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <div></div>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <div></div>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <div></div>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <FormControl variant="standard" className={classes.formControl}>
                <AutoCompleteInputCustom
                  label={"Order Type"}
                  options={orderType}
                  variant="standard"
                  name="orderType"
                  value={state.orderType}
                  handleChangeAutoComplete={handleChangeAutoComplete}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <FormControl variant="standard" className={classes.formControl}>
                <Input
                  id="filled-number"
                  label="Comment"
                  type="text"
                  name="comment"
                  value={state.comment}
                  variant="filled"
                  handleChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <div></div>
            </Grid>{" "}
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <div></div>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <FormControl variant="standard" className={classes.formControl}>
                <AutoCompleteInputCustom
                  label={"Duration"}
                  options={duration}
                  variant="standard"
                  name="duration"
                  value={state.duration}
                  handleChangeAutoComplete={handleChangeAutoComplete}
                />{" "}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                  />
                }
                label="All or none"
                labelPlacement="end"
              />
            </Grid>
          </React.Fragment>
        )}
        <Grid
          item
          xs={12}
          sm={12}
          className={classes.gridItem}
          style={{ textAlign: "end", padding: "20px" }}
        >
          <Button
            variant="contained"
            color="primary"
            component="span"
            size="small"
            onClick={() => {
              alert("trading without active account is Forbidden !");
            }}
          >
            Verify
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PlaceNewOrder;
