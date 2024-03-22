"use client";
import { ColorModeContext } from "@/theme/colorMode";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";

const Container = ({ children }) => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.action.active,
      }}
    >
      <AppBar
        sx={{ backgroundColor: theme.palette.background.default }}
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: theme.palette.text.primary }}
          >
            Where in the world?
          </Typography>
          <Button
            sx={{
              color: theme.palette.action.active,
              textTransform: "capitalize",
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center'
            }}
            onClick={toggleColorMode}
          >
            {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
            {theme.palette.mode} mode
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default Container;

/**
     <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
 */
