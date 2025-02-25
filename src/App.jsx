import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid2 } from "@mui/material";
import Header from "./components/layout/header/Header";

function MyApp() {
  return (
    <Grid2
      container
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Box
        sx={{
          flex: 1, // This allows the content area to take the remaining height
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        hello
      </Box>
    </Grid2>
  );
}

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export default function ToggleColorMode() {
  return (
    <ThemeProvider theme={theme}>
      <MyApp />
    </ThemeProvider>
  );
}
