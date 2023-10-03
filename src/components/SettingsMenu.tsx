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
import { useState } from "react";

function SettingsMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [quantity, setQuantity] = useState<number>(4);

  const handleQuantityChange = (event: SelectChangeEvent) => {
    setQuantity(parseFloat(event.target.value));
  };
  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        <Settings />
      </IconButton>
      <Menu anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}>
        <MenuItem>
          <Box>
            <Typography>Dark Background</Typography>
            <InputBase
              sx={{
                border: "1px solid black",
                borderRadius: "25px",
                padding: "10px",
                boxSizing: "border-box",
              }}
              size="small"
              startAdornment={
                <InputAdornment position="start">#</InputAdornment>
              }
            />
          </Box>
        </MenuItem>
        <MenuItem>
          <Box>
            <Typography>Light Background</Typography>
            <InputBase
              sx={{
                border: "1px solid black",
                borderRadius: "25px",
                padding: "10px",
                boxSizing: "border-box",
              }}
              size="small"
              startAdornment={
                <InputAdornment position="start">#</InputAdornment>
              }
            />
          </Box>
        </MenuItem>
        <MenuItem>
          <Box width={"100%"}>
            <Typography>Number of Colors</Typography>
            <FormControl fullWidth>
              <Select
                sx={{ border: "1px solid black", borderRadius: "25px" }}
                value={quantity.toString()}
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

export default SettingsMenu;
