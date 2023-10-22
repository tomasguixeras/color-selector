import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import React from "react";
import { getDesignTokens } from "./theme";

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const [lightBG, setLightBG] = React.useState("#FFFFFF");
  const [darkBG, setDarkBG] = React.useState("#242424");

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  const changeLightBackground = (newColor: string) => {
    setLightBG(newColor);
  };

  const changeDarkBackground = (newColor: string) => {
    setDarkBG(newColor);
  };

  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens({ mode, lightBG, darkBG })),
    [mode, lightBG, darkBG]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
    lightBG,
    changeLightBackground,
    darkBG,
    changeDarkBackground,
  };
};
