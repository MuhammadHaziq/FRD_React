import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import OpenChainRowPopUp from "../../OpenChain/Component/OpenChainRowPopUp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    color: "black",
  },
}));

export default function SecurityLists(props) {
  const classes = useStyles();
  const [dense] = useState(true);
  const [secondary] = useState(false);
  //--------------------------------
  const [popUpData, setPopUpData] = useState({
    stockSymbol: null,
    limitPrice: "AAA",
  });
  const [state, setState] = useState({
    RowPopUp: false,
  });
  const handlePopUpOpen = (e) => {
    console.log(props.stockSymbol);
    setPopUpData({
      ...popUpData,
      limitPrice: e.target.innerHTML,
      stockSymbol: props.stockSymbol,
    });
    setState({ RowPopUp: true });
  };
  const closeModel = () => {
    setState({ ...state, RowPopUp: false });
  };

  //--------------------------------

  return (
    <div className="security-info-main">
      <Grid container direction="column" justifyContent="flex-start">
        <Grid item xs={12} md={6} spacing={3}>
          <Typography variant="h6" className={classes.title}>
            Information
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {(props.data || []).map((item, index) => (
                <ListItem>
                  <ListItemText
                    primary={item.label}
                    secondary={secondary ? "Secondary text" : null}
                  />
                  <ListItemSecondaryAction>
                    {(item.label == "Last" ||
                      item.label == "Bid" ||
                      item.label == "Ask") &&
                    props.stockSymbol ? (
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={handlePopUpOpen}
                      >
                        {222}
                      </IconButton>
                    ) : (
                      233
                    )}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
          >
            {props.stockSymbol && (
              <Button
                variant="contained"
                color="primary"
                onClick={handlePopUpOpen}
              >
                Trade
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
      {state.RowPopUp && (
        <OpenChainRowPopUp
          popUpData={popUpData}
          closeModel={closeModel}
          RowPopUp={state.RowPopUp}
        />
      )}
    </div>
  );
}
