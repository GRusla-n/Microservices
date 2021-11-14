import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme';

function MyApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <>
      <Head>
        <title>Ticketing</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  );
}

export default MyApp;
