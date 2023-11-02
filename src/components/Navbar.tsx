import Logo from "../assets/Logo.png";
import { Box, Avatar, IconButton } from "@mui/material";

import { SettingsMenu } from "./SettingsMenu";
import { ThemeToggle } from "./ThemeToggle";

type NavbarProps = {
  cardQuantity: number;
  setCardQuantity: React.Dispatch<React.SetStateAction<number>>;
};
function Navbar({ cardQuantity, setCardQuantity }: NavbarProps) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px 30px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Avatar src={Logo} alt="Logo" sx={{ width: "70px", height: "auto" }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <ThemeToggle />
        <SettingsMenu
          cardQuantity={cardQuantity}
          setCardQuantity={setCardQuantity}
        />
      </Box>
    </Box>
  );
}

export default Navbar;
