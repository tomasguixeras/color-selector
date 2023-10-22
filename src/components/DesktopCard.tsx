import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Input,
  InputAdornment,
} from "@mui/material";
import { Check, Close } from "@mui/icons-material";

function DesktopCard({ hex }: { hex: string }) {
  const [colorChange, setColorChange] = useState(false);
  const [hexCode, setHexCode] = useState(hex);
  const [auxHexCode, setAuxHexCode] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    if (inputValue !== "#") inputValue = `#${inputValue}`;

    setAuxHexCode(inputValue.toUpperCase());
  };

  const onSubmit = () => {
    setHexCode(auxHexCode);
    setAuxHexCode("");
    setColorChange(false);
  };
  const onCancel = () => {
    setColorChange(false);
    setAuxHexCode("");
  };

  return (
    <Box
      sx={{
        border: "1px solid black",
        width: window?.screen.width >= 1000 ? "270px" : "90%",
        height: window?.screen.width >= 1000 ? "100%" : "170px",
        borderRadius: "25px",
        position: "relative",
        bgcolor: hexCode,
      }}
    >
      <Box
        sx={{
          width: "150px",
          position: "absolute",
          left: "50%",
          marginLeft: "-75px",
          bottom: "15%",
          textAlign: "center",
        }}
      >
        <Typography fontSize={17}>Hex Code</Typography>
        <Box height={35}>
          {!colorChange ? (
            <Typography
              fontSize={30}
              onClick={() => setColorChange(!colorChange)}
              sx={{ cursor: "pointer" }}
            >
              {hexCode}
            </Typography>
          ) : (
            <Box>
              <Input
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={onSubmit}>
                      <Check />
                    </IconButton>
                    <IconButton size="small" onClick={onCancel}>
                      <Close />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default DesktopCard;
