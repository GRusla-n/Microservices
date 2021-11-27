import * as React from 'react';
import Head from 'next/head';
import { AppContext, AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';
import theme from '../styles/theme';
import Header from '../components/Header';
import buildClient from '../api/build-client';
import { NextPage, NextPageContext } from 'next';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

App.getInitialProps = async (context: AppContext) => {
  const client = buildClient(context.ctx);
  const { data } = await client.get('/api/users/currentuser');

  console.log('data', data)

  return data;
};

export default App;
