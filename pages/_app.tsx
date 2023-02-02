import React, { useEffect } from "react";
import { SessionProvider } from 'next-auth/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import LayoutAuth from '../components/LayoutAuth';
import LayoutManager from '../components/LayoutManager';
import LayoutOB from '../components/LayoutOB';
import LayoutUsers from '../components/LayoutUsers';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import { useRouter } from "next/router";
import Login from "./login";
import Dashboard from "./admin/dashboard";
import Home from ".";
import Hotel from "./admin/hotel";
import Users from "./admin/users";
import Booking from "./admin/booking";
import Master from "./admin/master";
import Payment from "./admin/payment";
import Purchasing from "./admin/purchasing";
import Resto from "./admin/resto";
import HumanResources from "./admin/humaNResources";
import Link from 'next/link';


const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // useEffect(() => {
  //   if (router.pathname === '/') {
  //     router.replace('/dashboard');
  //   }
  // }, [router]);

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {router.pathname === '/admin/dashboard' && (
          <Layout>
            <Dashboard />       
          </Layout>
        )}
        {router.pathname === '/admin/master' && (
          <Layout>
            <Master />
          </Layout>
        )}
        {router.pathname === '/admin/booking' && (
          <Layout>
            <Booking />
          </Layout>
        )}
        {router.pathname === '/admin/users' && (
          <Layout>
            <Users />
          </Layout>
        )}
        {router.pathname === '/admin/hotel' && (
          <Layout>
            <Hotel />
          </Layout>
        )}
        {router.pathname === '/admin/humanresources' && (
          <Layout>
            <HumanResources />
          </Layout>
        )}
        {router.pathname === '/admin/payment' && (
          <Layout>
            <Payment />
          </Layout>
        )}
        {router.pathname === '/admin/purchasing' && (
          <Layout>
            <Purchasing />
          </Layout>
        )}
        {router.pathname === '/admin/resto' && (
          <Layout>
            <Resto />
          </Layout>
        )}
      </Provider>
    </SessionProvider>
  )
};

export default App;
