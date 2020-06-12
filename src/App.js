import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, Typography, Button, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import ButtonAppBar from "./components/ButtonAppBar";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ButtonAppBar handleDarkMode={handleDarkMode} darkMode={darkMode} />
        <Paper variant="outlined" style={{ height: "120vh" }} />
        <Grid container></Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
