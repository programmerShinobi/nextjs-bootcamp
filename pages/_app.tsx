import React, { useEffect } from "react";
import { SessionProvider } from 'next-auth/react'

import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import AuthLayout from '../components/AuthLayout';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import { useRouter } from "next/router";
import Login from "./index";
import Dashboard from "./dashboard";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // useEffect(() => {
  //   if (router.pathname === '/') {
  //     router.replace('/dashboard');
  //   }
  // }, [router]);

  return (
<SessionProvider session={pageProps.session}>
      {router.pathname === '/' ? (
        <AuthLayout>
          <Login {...pageProps} />
        </AuthLayout>
      ) : (
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      )}
</SessionProvider>
  )
};

export default App;
