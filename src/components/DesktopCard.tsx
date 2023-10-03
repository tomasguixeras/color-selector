import { Box, Typography } from "@mui/material";
import React from "react";

function DesktopCard() {
  return (
    <Box
      sx={{
        border: "1px solid black",
        width: "270px",
        borderRadius: "25px",
        position: "relative",
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
        <Typography fontSize={30}>FFFFFF</Typography>
      </Box>
    </Box>
  );
}

export default DesktopCard;
