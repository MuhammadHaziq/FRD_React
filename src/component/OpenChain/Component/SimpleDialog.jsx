import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { blue } from "@material-ui/core/colors";
import CheckBoxInput from "../../InputComponents/Component/CheckBoxInput";

export default function SimpleDialog(props) {
  const [tableColumns, setTableColumns] = useState(props.tableColumns);
  const handleChange = (e) => {
    setTableColumns(
      tableColumns.slice().map((item) => {
        if (item.colName == e.target.name) {
          return {
            ...item,
            open: e.target.checked,
          };
        }
        return item;
      })
    );
  };

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={props.open}
      style={{ width: "fit-content" }}
    >
      <List>
        {tableColumns.map((c) => (
          <ListItem button key={c.colName}>
            <CheckBoxInput
              label={c.colName}
              handleChange={handleChange}
              value={c.open}
              name={c.colName}
            />
          </ListItem>
        ))}
      </List>
      <span>
        <Button
          onClick={() => {
            props.handleClose(tableColumns);
          }}
        >
          submit
        </Button>
        <Button
          onClick={() => {
            props.handleClose(props.tableColumns);
          }}
        >
          cancel
        </Button>
      </span>
    </Dialog>
  );
}
