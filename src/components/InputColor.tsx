import React, { useState } from "react";

import { Check } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { validHexCode } from "../utils/validHexCode";

type InputColorProps = {
  labelText: string;
  color: string;
  colorChangeFn: (newColor: string) => void;
};

export default function InputColor({
  labelText,
  color,
  colorChangeFn,
}: InputColorProps) {
  const [state, setState] = useState(color);
  const validCode = validHexCode(state);

  return (
    <Box sx={{ textAlign: "center" }}>
      <InputLabel sx={{ marginBottom: "6px" }}>{labelText}</InputLabel>
      <OutlinedInput
        error={!validCode}
        size="small"
        value={state}
        onChange={(event) => setState(event.target.value)}
        type={"text"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              disabled={!validCode}
              onClick={() => colorChangeFn(state)}
            >
              <Check />
            </IconButton>
          </InputAdornment>
        }
        sx={{
          border: "1px solid transparent",
          borderRadius: "25px",
          padding: "6px 4px",
          boxSizing: "border-box",
        }}
      />
    </Box>
  );
}
