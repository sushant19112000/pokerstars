import React from 'react';
import RootLayout from './layout'; // Adjust the import path
import Head from 'next/head';
import { RecoilRoot } from "recoil";
import { useEffect } from 'react';
import '@/app/configs/recoil'
import { useRouter } from 'next/router';
export default function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap" rel="stylesheet" />
      </Head>

      <RootLayout>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </RootLayout>
    </div>
  )
}

