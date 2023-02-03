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
import PrivateRoute from "../utils/privateRoute"

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
          <PrivateRoute>
            <LayoutManager>
              <DashboardManager {...pageProps}/>       
            </LayoutManager>
          </PrivateRoute>
        )}
        {router.pathname === '/ob' && (
          <PrivateRoute>
            <LayoutOB>
              <OB {...pageProps}/>       
            </LayoutOB>
          </PrivateRoute>
        )}
        {router.pathname === '/ob/hotel' && (
          <PrivateRoute>
            <LayoutOB>
              <HotelOB {...pageProps}/>
            </LayoutOB>
          </PrivateRoute>
        )}
        {router.pathname === '/admin' && (
          <PrivateRoute>
            <Layout>
              <DashboardAdmin {...pageProps}/>       
            </Layout>
          </PrivateRoute>
        )}
        {router.pathname === '/admin/master' && (
          <PrivateRoute>
            <Layout>
              <Master {...pageProps}/>
            </Layout>
          </PrivateRoute>
        )}
        {router.pathname === '/admin/booking' && (
          <PrivateRoute>
            <Layout>
              <Booking {...pageProps}/>
            </Layout>
          </PrivateRoute>
        )}
        {router.pathname === '/admin/users' && (
          <PrivateRoute>
            <Layout>
              <Users/>
            </Layout>
          </PrivateRoute>
        )}
        {router.pathname === '/admin/hotel' && (
          <PrivateRoute>
            <Layout>
              <Hotel {...pageProps}/>
            </Layout>
          </PrivateRoute>
        )}
        {router.pathname === '/admin/humanResources' && (
          <PrivateRoute>
            <Layout>
              <HumanResources {...pageProps}/>
            </Layout>
          </PrivateRoute>
        )}
        {router.pathname === '/admin/payment' && (
          <PrivateRoute>
            <Layout>
              <Payment {...pageProps}/>
            </Layout>
          </PrivateRoute>
        )}
        {router.pathname === '/admin/purchasing' && (
          <PrivateRoute>
            <Layout>
              <Purchasing {...pageProps}/>
            </Layout>
          </PrivateRoute>
        )}
        {router.pathname === '/admin/resto' && (
          <PrivateRoute>
            <Layout>
              <Resto {...pageProps}/>
            </Layout>
          </PrivateRoute>
        )}
        {router.pathname === '/admin/editUserPhoto' && (
          <PrivateRoute>
            <Layout>
              <EditUserPhoto {...pageProps} />
            </Layout>
          </PrivateRoute>
        )}
        {router.pathname === '/users' && (
          <PrivateRoute>
            <LayoutUsers>
              <User {...pageProps}/>       
            </LayoutUsers>
          </PrivateRoute>
        )}
      </Provider>
    </SessionProvider>
  )
};

export default App;
