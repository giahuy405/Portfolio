import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

const monsterat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mon"
})

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${monsterat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark dark:text-light duration-300`}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
  </>


}
