import { Send } from "@mui/icons-material";
import { IconButton, InputAdornment, InputBase, Paper } from "@mui/material";
import React from "react";

function TextInput(props: any) {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "90%" }}
    >
      <InputBase
        onChange={props.onHandleColorChanged}
        sx={{ ml: 1, flex: 1 }}
        placeholder="FFFFFF"
        startAdornment={<InputAdornment position="start">#</InputAdornment>}
      />
      <IconButton
        onClick={props.onColorChanged}
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <Send />
      </IconButton>
    </Paper>
  );
}

export default TextInput;
