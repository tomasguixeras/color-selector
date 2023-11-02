import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px 0px 17px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography color="text.primary" sx={{ fontSize: "14px" }}>
        Design by
        <a
          href="https://tomasguixeras.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007aa5", padding: "5px" }}
        >
          TomasGuixeras
        </a>
      </Typography>
    </Box>
  );
}

export default Footer;
