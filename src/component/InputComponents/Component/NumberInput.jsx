import React from "react";
import TextField from "@material-ui/core/TextField";

function NumberInput(props) {
  return (
    <TextField
      id="standard-number"
      label={props.label}
      type="number"
      value={props.value}
      onChange={props.handleChange}
      inputProps={props.inputProps}
      name={props.name}
      disabled={props.disable}
    />
  );
}
export default NumberInput;
