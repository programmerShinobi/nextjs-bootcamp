import React from "react";
import { SessionProvider } from 'next-auth/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import { useRouter } from "next/router";
import Dashboard from "./admin/dashboard";
import Hotel from "./admin/hotel";
import Users from "./admin/users";
import Booking from "./admin/booking";
import Master from "./admin/master";
import Payment from "./admin/payment";
import Purchasing from "./admin/purchasing";
import Resto from "./admin/resto";
import HumanResources from "./admin/humanResources"
import EditUserPhoto from "./admin/editUserPhoto";


const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {router.pathname === '/admin/dashboard' && (
          <Layout>
            <Dashboard {...pageProps}/>       
          </Layout>
        )}
        {router.pathname === '/admin/master' && (
          <Layout>
            <Master {...pageProps}/>
          </Layout>
        )}
        {router.pathname === '/admin/booking' && (
          <Layout>
            <Booking {...pageProps}/>
          </Layout>
        )}
        {router.pathname === '/admin/users' && (
          <Layout>
            <Users {...pageProps}/>
          </Layout>
        )}
        {router.pathname === '/admin/hotel' && (
          <Layout>
            <Hotel {...pageProps}/>
          </Layout>
        )}
        {router.pathname === '/admin/humanResources' && (
          <Layout>
            <HumanResources {...pageProps}/>
          </Layout>
        )}
        {router.pathname === '/admin/payment' && (
          <Layout>
            <Payment {...pageProps}/>
          </Layout>
        )}
        {router.pathname === '/admin/purchasing' && (
          <Layout>
            <Purchasing {...pageProps}/>
          </Layout>
        )}
        {router.pathname === '/admin/resto' && (
          <Layout>
            <Resto {...pageProps}/>
          </Layout>
        )}
        {router.pathname === '/admin/editUserPhoto' && (
          <Layout>
            <EditUserPhoto {...pageProps} />
          </Layout>
        )}
      </Provider>
    </SessionProvider>
  )
};

export default App;
