import React, { useState } from "react";
import { Send } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import TextInput from "./TextInput";

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
        margin: "5px",
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
      <TextInput
        onColorChanged={onColorChanged}
        onHandleColorChanged={onHandleColorChanged}
      />
    </Box>
  );
}

export default ColorCard;
