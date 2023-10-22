import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: amber,
          divider: amber[200],
          background: {
            default: "#FFFFFF",
            paper: "#FFFFFF",
          },
          text: {
            primary: "#000000",
            secondary: "#121212",
          },
        }
      : {
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: "#242424",
            paper: "#242424",
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#22272E",
          },
        }),
  },
});

export default theme;
