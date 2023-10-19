import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useState } from "react";

type NavbarProps = {
  colorMode: string;
  setColorMode: React.Dispatch<React.SetStateAction<string>>;
};

export function ThemeToggle({ colorMode, setColorMode }: NavbarProps) {
  // const [themeMode, setThemeMode] = useState<string>("Light");

  const handleThemeChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setColorMode(value);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={colorMode}
      onChange={handleThemeChange}
      exclusive
    >
      <ToggleButton value={"Dark"}>
        <DarkMode />
      </ToggleButton>
      <ToggleButton value={"Light"}>
        <LightMode />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
