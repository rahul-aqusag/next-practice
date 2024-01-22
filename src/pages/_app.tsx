// pages/_app.tsx

import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import store from '@/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
