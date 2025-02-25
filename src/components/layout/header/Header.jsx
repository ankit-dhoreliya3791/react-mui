import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleTheme from "../../common/ToggleTheme";
import { Box, useColorScheme } from "@mui/material";

const Header = () => {
  const { mode } = useColorScheme();
  const appBarBgColor = mode === "dark" ? "#121212" : "#12ABDB";
  console.log(mode);
  return (
    <AppBar position="static" sx={{ bgcolor: appBarBgColor }}>
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6">REACT MUI</Typography>
        <Box sx={{ ml: "auto" }}>
          <ToggleTheme />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
