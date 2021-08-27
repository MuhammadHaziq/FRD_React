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
import { Button, Grid } from "@material-ui/core";
import SelectInput from "../../InputComponents/Component/SelectInput";
import { openChainAction } from "../../../Constants/Constants";
import OpenChainRowPopUp from "./OpenChainRowPopUp";
import CheckBoxInput from "../../InputComponents/Component/CheckBoxInput";
import Input from "../../InputComponents/Component/Input";
import { IconButton } from "@material-ui/core";
import BootstrapTooltip from "../../InputComponents/Component/ToolKit";
import SimpleDialog from "./SimpleDialog";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const handleChange = () => {
  alert("sas");
};
const SymbolTable = (props) => {
  //-----------------
  const [tableColumns, setTableColumns] = useState([
    { colName: "Price", open: true },
    { colName: "Last", open: true },
    { colName: "Bid", open: true },
    { colName: "Bid sz.", open: false },
    { colName: "Ask", open: true },
    { colName: "Ask Sz.", open: false },
    { colName: "Open", open: false },
    { colName: "High", open: true },
    { colName: "Low", open: false },
    { colName: "Close", open: false },
    { colName: "Volume", open: true },
    { colName: "Op. Int.", open: false },
    { colName: "Impl. Vol.", open: false },
    { colName: "Delta", open: false },
    { colName: "Gemma", open: true },
    { colName: "Theta", open: false },
    { colName: "Vega", open: false },
    { colName: "Raho", open: true },
    { colName: "Time", open: false },
    { colName: "Position", open: false },
  ]);

  const data = [
    {
      Price: "222",
      Last: "333",
      Bid: "22",
      BidSz: "333",
      Ask: "112",
      AskSz: "231",
      Open: "222",
      High: "21",
      Low: "1211",
      Close: "3333",
      Volume: "232",
      OpInt: "110",
      ImplVol: "2221",
      Delta: "21",
      Gemma: "12",
      Theta: "1010",
      Vega: "099",
      Raho: "112",
      Time: "111",
      Position: "1113",
    },
    {
      Price: "222",
      Last: "333",
      Bid: "22",
      BidSz: "333",
      Ask: "112",
      AskSz: "231",
      Open: "222",
      High: "21",
      Low: "1211",
      Close: "3333",
      Volume: "232",
      OpInt: "110",
      ImplVol: "2221",
      Delta: "21",
      Gemma: "12",
      Theta: "1010",
      Vega: "099",
      Raho: "112",
      Time: "111",
      Position: "1113",
    },
    {
      Price: "222",
      Last: "333",
      Bid: "22",
      BidSz: "333",
      Ask: "112",
      AskSz: "231",
      Open: "222",
      High: "21",
      Low: "1211",
      Close: "3333",
      Volume: "232",
      OpInt: "110",
      ImplVol: "2221",
      Delta: "21",
      Gemma: "12",
      Theta: "1010",
      Vega: "099",
      Raho: "112",
      Time: "111",
      Position: "1113",
    },
    {
      Price: "222",
      Last: "333",
      Bid: "22",
      BidSz: "333",
      Ask: "112",
      AskSz: "231",
      Open: "222",
      High: "21",
      Low: "1211",
      Close: "3333",
      Volume: "232",
      OpInt: "110",
      ImplVol: "2221",
      Delta: "21",
      Gemma: "12",
      Theta: "1010",
      Vega: "099",
      Raho: "112",
      Time: "111",
      Position: "1113",
    },
    {
      Price: "222",
      Last: "333",
      Bid: "22",
      BidSz: "333",
      Ask: "112",
      AskSz: "231",
      Open: "222",
      High: "21",
      Low: "1211",
      Close: "3333",
      Volume: "232",
      OpInt: "110",
      ImplVol: "2221",
      Delta: "21",
      Gemma: "12",
      Theta: "1010",
      Vega: "099",
      Raho: "112",
      Time: "111",
      Position: "1113",
    },
    {
      Price: "222",
      Last: "333",
      Bid: "22",
      BidSz: "333",
      Ask: "112",
      AskSz: "231",
      Open: "222",
      High: "21",
      Low: "1211",
      Close: "3333",
      Volume: "232",
      OpInt: "110",
      ImplVol: "2221",
      Delta: "21",
      Gemma: "12",
      Theta: "1010",
      Vega: "099",
      Raho: "112",
      Time: "111",
      Position: "1113",
    },
    {
      Price: "222",
      Last: "333",
      Bid: "22",
      BidSz: "333",
      Ask: "112",
      AskSz: "231",
      Open: "222",
      High: "21",
      Low: "1211",
      Close: "3333",
      Volume: "232",
      OpInt: "110",
      ImplVol: "2221",
      Delta: "21",
      Gemma: "12",
      Theta: "1010",
      Vega: "099",
      Raho: "112",
      Time: "111",
      Position: "1113",
    },
  ];

  const [changeCoulmnOpen, setChangeCoulmnOpen] = useState(false);
  const handleChangeCoulmnColse = (a) => {
    setTableColumns(a);
    setChangeCoulmnOpen(false);
    console.log(tableColumns);
  };
  const handleChnageColumnOpen = () => {
    setChangeCoulmnOpen(true);
  };
  //------------
  const [DataToSend, setDataToSend] = useState([]);
  const handleSetDataToSend = (item) => {
    setDataToSend([...DataToSend, item]);
    console.log(DataToSend);
  };
  //-------------
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
      stockSymbol: { title: "The Shawshank Redemption", year: 1994 },
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
      <TableContainer component={Paper} style={{ maxHeight: 450 }}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {(tableColumns || []).map((col, index) => {
                if (col.open == true) {
                  return <TableCell>{col.colName} </TableCell>;
                }
              })}

              <TableCell colSpan={3} align="center">
                Strike
              </TableCell>

              {(tableColumns || []).map((col, index) => {
                if (col.open == true) {
                  return <TableCell>{col.colName}</TableCell>;
                }
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {(data || []).map((item, index) => (
              <TableRow>
                <TableCell>
                  <BootstrapTooltip title={item.Last}>
                    <span
                      style={{
                        backgroundColor: "#4BADF2",
                        padding: 10,
                        borderRadius: 5,
                      }}
                    >
                      Σ
                    </span>
                  </BootstrapTooltip>
                </TableCell>

                {(tableColumns || []).map((col, index) => {
                  if (col.open == true && col.colName == "Price") {
                    return (
                      <TableCell onClick={handlePopUpOpen}>
                        {item.Price}
                      </TableCell>
                    );
                  }
                  if (col.open == true && col.colName == "Last") {
                    return (
                      <TableCell onClick={handlePopUpOpen}>
                        {item.Last}
                      </TableCell>
                    );
                  }
                  if (col.open == true && col.colName == "Bid") {
                    return (
                      <TableCell onClick={handlePopUpOpen}>
                        {item.Bid}
                      </TableCell>
                    );
                  }
                  if (col.open == true && col.colName == "Bid sz.") {
                    return <TableCell>{item.BidSz}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Ask") {
                    return (
                      <TableCell onClick={handlePopUpOpen}>
                        {item.Ask}
                      </TableCell>
                    );
                  }
                  if (col.open == true && col.colName == "Ask Sz.") {
                    return <TableCell>{item.AskSz}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Open") {
                    return <TableCell>{item.Open}</TableCell>;
                  }
                  if (col.open == true && col.colName == "High") {
                    return <TableCell>{item.High}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Low") {
                    return <TableCell>{item.Low}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Close") {
                    return <TableCell>{item.Close}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Volume") {
                    return <TableCell>{item.Volume}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Op. Int.") {
                    return <TableCell>{item.OpInt}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Impl. Vol.") {
                    return <TableCell>{item.ImplVol}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Delta") {
                    return <TableCell>{item.Delta}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Gemma") {
                    return <TableCell>{item.Gemma}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Theta") {
                    return <TableCell>{item.Theta}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Vega") {
                    return <TableCell>{item.Vega}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Raho") {
                    return <TableCell>{item.Raho}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Time") {
                    return <TableCell>{item.Time}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Position") {
                    return <TableCell>{item.Position}</TableCell>;
                  }
                })}

                <TableCell>
                  <CheckBoxInput
                    handleChange={() => {
                      handleSetDataToSend(item);
                    }}
                  />
                </TableCell>
                <TableCell align="center">{100}</TableCell>
                <TableCell>
                  <CheckBoxInput />
                </TableCell>
                {(tableColumns || []).map((col, index) => {
                  if (col.open == true && col.colName == "Price") {
                    return (
                      <TableCell onClick={handlePopUpOpen}>
                        {item.Price}
                      </TableCell>
                    );
                  }
                  if (col.open == true && col.colName == "Last") {
                    return (
                      <TableCell onClick={handlePopUpOpen}>
                        {item.Last}
                      </TableCell>
                    );
                  }
                  if (col.open == true && col.colName == "Bid") {
                    return (
                      <TableCell onClick={handlePopUpOpen}>
                        {item.Bid}
                      </TableCell>
                    );
                  }
                  if (col.open == true && col.colName == "Bid sz.") {
                    return <TableCell>{item.BidSz}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Ask") {
                    return (
                      <TableCell onClick={handlePopUpOpen}>
                        {item.Ask}
                      </TableCell>
                    );
                  }
                  if (col.open == true && col.colName == "Ask Sz.") {
                    return <TableCell>{item.AskSz}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Open") {
                    return <TableCell>{item.Open}</TableCell>;
                  }
                  if (col.open == true && col.colName == "High") {
                    return <TableCell>{item.High}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Low") {
                    return <TableCell>{item.Low}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Close") {
                    return <TableCell>{item.Close}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Volume") {
                    return <TableCell>{item.Volume}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Op. Int.") {
                    return <TableCell>{item.OpInt}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Impl. Vol.") {
                    return <TableCell>{item.ImplVol}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Delta") {
                    return <TableCell>{item.Delta}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Gemma") {
                    return <TableCell>{item.Gemma}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Theta") {
                    return <TableCell>{item.Theta}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Vega") {
                    return <TableCell>{item.Vega}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Raho") {
                    return <TableCell>{item.Raho}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Time") {
                    return <TableCell>{item.Time}</TableCell>;
                  }
                  if (col.open == true && col.colName == "Position") {
                    return <TableCell>{item.Position}</TableCell>;
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>{" "}
      </TableContainer>
      <div>
        <IconButton onClick={handleChnageColumnOpen}>Change Columns</IconButton>
        {changeCoulmnOpen && (
          <SimpleDialog
            handleClose={handleChangeCoulmnColse}
            open={changeCoulmnOpen}
            tableColumns={tableColumns}
          />
        )}
        <Button
          size="small"
          style={{ backgroundColor: "#4DA0DB", padding: 1, margin: 5 }}
        >
          Add to watchlist
        </Button>
        <Button
          size="small"
          style={{ backgroundColor: "#4DA0DB", padding: 1, margin: 5 }}
        >
          trade
        </Button>
        <Button
          size="small"
          style={{ backgroundColor: "#4DA0DB", padding: 1, margin: 5 }}
        >
          clear slection
        </Button>
      </div>
      {state.RowPopUp && (
        <OpenChainRowPopUp
          popUpData={popUpData}
          closeModel={closeModel}
          RowPopUp={state.RowPopUp}
        >
          <div>slkdajdlasjds</div>
        </OpenChainRowPopUp>
      )}
    </React.Fragment>
  );
};
export default SymbolTable;
