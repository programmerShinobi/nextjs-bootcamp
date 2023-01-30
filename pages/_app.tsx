import React,{useEffect} from "react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import store  from '../Redux/Store';
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/users');
    }
  });
  
  return (
    <Provider store={store}>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </Provider>
  )
}
