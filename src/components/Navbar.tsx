import { Box, Avatar, Button } from "@mui/material";
import React from "react";
import Logo from "../assets/Logo.png";

function Navbar(props: any) {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Avatar src={Logo} alt="Logo" sx={{ width: "70px", height: "auto" }} />
      <Button
        variant="contained"
        size="large"
        onClick={props.setColorChange}
        >{`Try on ${props.currentTheme} Mode!`}</Button>
      <Button
        variant="outlined"
        href="https://links.tomasbohngs.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        + INFO
      </Button>
    </Box>
  );
}

export default Navbar;
