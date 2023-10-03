import { useEffect, useState } from "react";
import { ThemeProvider, Box, Button, createTheme } from "@mui/material";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DesktopCard from "./components/DesktopCard";

function App() {
  const [allColors, setAllColors] = useState([]);
  const [filteredColors, setFilteredColors] = useState([]);
  const [colorMode, setColorMode] = useState("Light");

  const darkTheme = createTheme({
    palette: {
      mode: colorMode === "Light" ? "light" : "dark",
    },
  });

  useEffect(() => {
    fetch("colorHex.json")
      .then((response) => response.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 5);
        setFilteredColors(selected);
        setAllColors(data);
      });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          margin: "auto",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: colorMode === "Light" ? "#FFFFFF" : "#000000",
        }}
      >
        <Navbar setColorMode={setColorMode} colorMode={colorMode} />
        <Box
          sx={{
            width: "100%",
            height: "70%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <DesktopCard />
          <DesktopCard />
          <DesktopCard />
          <DesktopCard />
        </Box>
        {/* <Cards
          allColors={allColors}
          setAllColors={setAllColors}
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
        /> */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
