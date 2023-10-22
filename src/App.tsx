import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContextProvider";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DesktopCard from "./components/DesktopCard";

function App() {
  const { theme } = useThemeContext();
  // const [allColors, setAllColors] = useState([]);
  const [filteredColors, setFilteredColors] = useState([]);
  const [cardQuantity, setCardQuantity] = useState<number>(4);

  useEffect(() => {
    fetch("colorHex.json")
      .then((response) => response.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, cardQuantity);
        setFilteredColors(selected);
        // setAllColors(data);
      });
  }, [cardQuantity]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
        }}
      >
        <Navbar cardQuantity={cardQuantity} setCardQuantity={setCardQuantity} />
        <Box
          sx={{
            width: "100%",
            height: "80%",
            display: "flex",
            flexDirection: window?.screen.width >= 1000 ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {filteredColors.map((color: { name: string; hex: string }) => {
            return <DesktopCard key={color.hex} hex={color.hex} />;
          })}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
