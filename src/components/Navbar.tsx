import { Box, Avatar } from "@mui/material";
import React from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <Avatar src={Logo} alt="Logo" sx={{ width: "70px", height: "auto" }} />
    </Box>
  );
}

export default Navbar;
