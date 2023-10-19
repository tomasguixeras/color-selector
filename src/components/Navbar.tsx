import Logo from "../assets/Logo.png";
import { Box, Avatar, IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { ThemeToggle } from "./ThemeToggle";
import SettingsMenu from "./SettingsMenu";

type NavbarProps = {
  colorMode: string;
  setColorMode: React.Dispatch<React.SetStateAction<string>>;
  cardQuantity: number;
  setCardQuantity: React.Dispatch<React.SetStateAction<number>>;
};
function Navbar({
  setColorMode,
  colorMode,
  cardQuantity,
  setCardQuantity,
}: NavbarProps) {
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
        <ThemeToggle colorMode={colorMode} setColorMode={setColorMode} />
        <SettingsMenu
          cardQuantity={cardQuantity}
          setCardQuantity={setCardQuantity}
        />
      </Box>
    </Box>
  );
}

export default Navbar;
