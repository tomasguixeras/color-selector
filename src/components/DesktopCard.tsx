import React, { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import { Check, Close } from "@mui/icons-material";

function DesktopCard({ hex }: { hex: string }) {
  const [colorChange, setColorChange] = useState(false);
  const [hexCode, setHexCode] = useState(hex);
  const [auxHexCode, setAuxHexCode] = useState("");

  const handleChange = (event: any) => {
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
        width: "270px",
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
            <TextField variant="standard" onChange={handleChange} />
            <IconButton onClick={onSubmit}>
              <Check />
            </IconButton>
            <IconButton onClick={onCancel}>
              <Close />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default DesktopCard;
