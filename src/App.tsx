import { ThemeProvider, Box, Button, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [colorMode, setColorMode] = useState("Light");
  //

  const darkTheme = createTheme({
    palette: {
      mode: colorMode === "Light" ? "light" : "dark",
    },
  });

  //

  // const [color, setColor] = useState("C4831D");
  const [allColors, setAllColors] = useState([]);
  const [filteredColors, setFilteredColors] = useState([]);

  const currentTheme = colorMode === "light" ? "dark" : "light";

  const setColorChange = () => {
    colorMode === "Light" ? setColorMode("Dark") : setColorMode("Light");
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
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colorMode === "Light" ? "#FFFFFF" : "#000000",
        }}
      >
        <Navbar setColorChange={setColorChange} currentTheme={currentTheme} />
        <Cards
          allColors={allColors}
          setAllColors={setAllColors}
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
        />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
