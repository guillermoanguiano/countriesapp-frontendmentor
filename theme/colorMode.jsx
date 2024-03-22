"use client";
import { useState, useMemo, createContext, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function ColorMode({ children }) {
  const storedMode = localStorage.getItem('colorMode');
  const [mode, setMode] = useState(storedMode || 'light');

  console.log(mode)
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  useEffect(() => {
    localStorage.setItem('colorMode', mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: roboto.style.fontFamily,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}