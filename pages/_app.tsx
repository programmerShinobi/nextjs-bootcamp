import React, { useEffect, useState } from "react";
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
import Index from ".";
import Hotel from "./admin/hotel";
import Users from "./admin/users";
import Booking from "./admin/booking";
import Master from "./admin/master";
import Payment from "./admin/payment";
import Purchasing from "./admin/purchasing";
import Resto from "./admin/resto";
import HumanResources from "./admin/humanResources"
import EditUserPhoto from "./admin/editUserPhoto";
import Login from "./auth/login";
import Register from "./auth/register";
import User from "./users";
import DashboardAdmin from "./admin";
import DashboardManager from "./manager";
import OB from "./ob";
import HotelOB from "./ob/hotel";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {router.pathname === '/' && (
          <LayoutAuth>
            <Index {...pageProps}/>       
          </LayoutAuth>
        )}
        {router.pathname === '/auth/login' && (
          <LayoutAuth>
            <Login {...pageProps}/>       
          </LayoutAuth>
        )}
        {router.pathname === '/auth/register' && (
          <LayoutAuth>
            <Register {...pageProps}/>       
          </LayoutAuth>
        )}
        {router.pathname === '/manager' && (
          <LayoutManager>
            <DashboardManager {...pageProps}/>       
          </LayoutManager>
        )}
        {router.pathname === '/ob' && (
          <LayoutOB>
            <OB {...pageProps}/>       
          </LayoutOB>
        )}
        {router.pathname === '/ob/hotel' && (
          <LayoutOB>
            <HotelOB {...pageProps}/>
          </LayoutOB>
        )}
        {router.pathname === '/admin' && (
          <PrivateRoute>
            <Layout>
              <DashboardAdmin {...pageProps}/>       
            </Layout>
          </PrivateRoute>
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
            <Users/>
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
        {router.pathname === '/users' && (
          <LayoutUsers>
            <User {...pageProps}/>       
          </LayoutUsers>
        )}
      </Provider>
    </SessionProvider>
  )
};

export default App;
