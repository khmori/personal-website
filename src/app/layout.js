import "./globals.css";
import Head from "next/head";

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 

import Header from './components/Header';
import Footer from './components/Footer'

export const metadata = {
  title: "kyle mori"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
      <body className={"flex flex-col max-w-[650px] p-4 ml-auto mr-auto mt-10 gap-8 min-h-[calc(100vh-74px)]"}>
        <Header />
        {children}
        <Footer />
      </body> 
    </html>
  );
}