import { useState } from "react";
import { Settings } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useThemeContext } from "../theme/ThemeContextProvider";
import InputColor from "./InputColor";

type SettingsProps = {
  cardQuantity: number;
  setCardQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export function SettingsMenu({ cardQuantity, setCardQuantity }: SettingsProps) {
  const { lightBG, darkBG, changeLightBackground, changeDarkBackground } =
    useThemeContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleQuantityChange = (event: SelectChangeEvent) => {
    setCardQuantity(parseFloat(event.target.value));
  };
  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        <Settings />
      </IconButton>
      <Menu anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}>
        <MenuItem sx={{ margin: "6px 0px" }}>
          <InputColor
            labelText={"Light Background"}
            color={lightBG}
            colorChangeFn={changeLightBackground}
          />
        </MenuItem>
        <MenuItem sx={{ margin: "6px 0px" }}>
          <InputColor
            labelText={"Dark Background"}
            color={darkBG}
            colorChangeFn={changeDarkBackground}
          />
        </MenuItem>
        <MenuItem sx={{ margin: "6px 0px" }}>
          <Box width={"100%"} sx={{ textAlign: "center" }}>
            <Typography sx={{ marginBottom: "6px" }}>
              Number of Colors
            </Typography>
            <FormControl fullWidth>
              <Select
                sx={{ border: "1px solid transparent", borderRadius: "25px" }}
                value={cardQuantity.toString()}
                onChange={handleQuantityChange}
                displayEmpty
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
}
