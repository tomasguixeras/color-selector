import { PaletteMode } from "@mui/material";
import { amber, deepOrange } from "@mui/material/colors";

type DesignTokensProps = {
  mode: PaletteMode;
  lightBG: string;
  darkBG: string;
};

export const getDesignTokens = ({
  mode,
  lightBG,
  darkBG,
}: DesignTokensProps) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: amber,
          divider: amber[200],
          background: {
            default: lightBG,
            paper: lightBG,
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
            default: darkBG,
            paper: darkBG,
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#22272E",
          },
        }),
  },
});
