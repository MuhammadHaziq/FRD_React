/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AutoCompleteInputCustom = (props) => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.options}
      getOptionLabel={(option) => option.title}
      value={props.value}
      disableClearable
      onChange={(event, newValue) => {
        props.handleChangeAutoComplete({
          name: props.name,
          value: newValue,
        });
        console.log(newValue, props.name, "ss");
      }}
      name={props.name}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          variant={props.variant}
          error={props.error}
        />
      )}
    />
  );
};
export default AutoCompleteInputCustom;
