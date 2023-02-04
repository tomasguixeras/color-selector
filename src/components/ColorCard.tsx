import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

function ColorCard(props: any) {
  const [newColor, setNewColor] = useState("");

  const onHandleColorChanged = (e: any) => {
    setNewColor(`#${e.target.value}`);
  };

  const onColorChanged = (e: any) => {
    const selectedColor = props.allColors.find(
      (color: any) => newColor === color.hex
    );
    const validateHex = /^#([0-9a-f]{3}){1,2}$/i;
    if (selectedColor) {
      let newColors = [...props.filteredColors];
      newColors[props.id] = selectedColor;
      props.setFilteredColors(newColors);
    } else if (validateHex.test(newColor)) {
      const aux = { name: "Unknown color name", hex: newColor };
      let newColors = [...props.filteredColors];
      newColors[props.id] = aux;
      props.setFilteredColors(newColors);
    } else {
      console.log("Error chan!!");
    }
  };

  return (
    <Box
      sx={{
        height: "90%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "117px",
          height: "380px",
          borderRadius: "100px",
          backgroundColor: props.color.hex,
          border: "1px dashed black",
        }}
      />
      <TextField
        onChange={onHandleColorChanged}
        sx={{ m: 1, width: "25ch", input: { textAlign: "center" } }}
        InputProps={{
          startAdornment: <InputAdornment position="start">#</InputAdornment>,
        }}
        // value={props.color.hex}
      />
      <Button onClick={onColorChanged}>Try New Color!</Button>
    </Box>
  );
}

export default ColorCard;
