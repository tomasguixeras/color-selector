import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useState } from "react";

export function ThemeToggle() {
  const [themeMode, setThemeMode] = useState<string>("Light");

  const handleThemeChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setThemeMode(value);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={themeMode}
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
