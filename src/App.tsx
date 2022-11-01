import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme/theme";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
