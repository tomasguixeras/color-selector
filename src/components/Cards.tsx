import React, { useState } from "react";
import { Box, stepButtonClasses } from "@mui/material";
import ColorCard from "./ColorCard";

function Cards(props: any) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.filteredColors &&
        props.filteredColors.map((color: any, idx: number) => {
          return (
            <ColorCard
              id={idx}
              color={color}
              key={color.hex}
              allColors={props.allColors}
              setAllColors={props.setAllColors}
              filteredColors={props.filteredColors}
              setFilteredColors={props.setFilteredColors}
            />
          );
        })}
    </Box>
  );
}

export default Cards;
