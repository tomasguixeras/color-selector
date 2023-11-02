import { createTheme, Theme } from "@mui/material";
import { createContext, FC, PropsWithChildren, useContext } from "react";
import { useColorTheme } from "./useColorTheme";

type ThemeContextType = {
  mode: string;
  toggleColorMode: () => void;
  theme: Theme;
  lightBG: string;
  darkBG: string;
  changeLightBackground: (newColor: string) => void;
  changeDarkBackground: (newColor: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
  lightBG: "#FFFFFF",
  darkBG: "#242424",
  changeLightBackground: () => {},
  changeDarkBackground: () => {},
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
