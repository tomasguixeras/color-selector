import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useThemeContext } from "../theme/ThemeContextProvider";

export function ThemeToggle() {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <IconButton value={mode} onClick={toggleColorMode}>
      {mode === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}
