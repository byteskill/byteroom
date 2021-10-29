import React, { useCallback } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import Nav from '../components/Nav';
import useSharedTheme from '../hooks/useTheme';
import { darkScrollbar } from '@mui/material';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const themeVal = props.pageProps.theme === 'dark' && 'dark' || 'light'

  const { theme: paletteMode, setDark, setLight } = useSharedTheme(themeVal);

  const theme = createTheme({
    components:{
      MuiCssBaseline: {
        styleOverrides: {
          body: paletteMode === 'dark' ? darkScrollbar() : ""
        }
      }
    },
    palette: {
      mode: paletteMode
    }
  });

  useCallback(() => {
    if(process.browser)
      paletteMode === 'dark' ? setDark() : setLight()
  }, [paletteMode, setDark, setLight])();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}