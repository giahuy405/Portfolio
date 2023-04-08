import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
const monsterat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mon"
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
 
    </Head>
    <ThemeProvider attribute='class'>
      <main className={`${monsterat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark dark:text-light  `}>
        <NavBar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </ThemeProvider>
  </>


}
