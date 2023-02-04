import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "10px 0px 5px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography>
        Design by{" "}
        <a
          href="https://www.tomasbohngs.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          TomasBohnGs
        </a>
      </Typography>
    </Box>
  );
}

export default Footer;