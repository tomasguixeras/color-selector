import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import ColorCard from "./components/ColorCard";
import Cards from "./components/Cards";

function App() {
  const [mode, setMode] = useState("Light");
  // const [color, setColor] = useState("C4831D");
  const [allColors, setAllColors] = useState([]);
  const [filteredColors, setFilteredColors] = useState([]);

  const currentTheme = mode === "Light" ? "Dark" : "Light";

  const setColorChange = () => {
    mode === "Light" ? setMode("Dark") : setMode("Light");
  };

  const getColorsHex = () => {
    try {
      fetch("colorHex.json")
        .then((response) => response.json())
        .then((data: any) => {
          const shuffled = data.sort(() => 0.5 - Math.random());
          let selected = shuffled.slice(0, 5);
          setFilteredColors(selected);
          setAllColors(data);
        });
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getColorsHex();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: mode === "Light" ? "#FFFFFF" : "#000000",
      }}
    >
      <Cards 
        allColors={allColors} 
        setAllColors={setAllColors} 
        filteredColors={filteredColors} 
        setFilteredColors={setFilteredColors} 
      />
      <Button
        variant="contained"
        size="large"
        onClick={setColorChange}
      >{`Try on ${currentTheme} Mode!`}</Button>
    </Box>
  );
}

export default App;
