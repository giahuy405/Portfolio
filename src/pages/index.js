import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
export default function Home() {
  return (
    <>
      <Head>
        <title>Phạm Gia Huy | Portfolio</title>
        <meta name="description" content="Generated by create next app" />

      </Head>
      <main className='flex items-center text-dark w-full min-h-screen' >
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt='phamgiahuy' className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col items-center text-left'>
              <p className=' w-full text-sm relative pl-8 dark:text-light'>
                Hello
                <span className={`h-[1px] inline-block bg-black absolute left-0  bottom-2 
              transition-[width] ease duration-300 w-5 dark:bg-light`}>&nbsp;</span>
              </p>
              <AnimatedText text={`My name is Pham Gia huy. `} className='!text-6xl !text-left' />
              <p className='text-base font-medium my-4 !text-left w-full dark:text-light'>I am Full Stack Developer who can build you full-stack web apps with React.js ecosystem for Frontend Web Development and Node.js ecosystem for Backend API Development (REST API).</p>
              <div className='flex items-center self-start mt-2'>
                <Link 
                className='flex items-center bg-dark text-light py-2.5 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark duration-300 border border-dark dark:bg-light dark:border-light dark:text-dark'
                // download={true}
                href='/dummy.pdf' target='_blank' >Resume
                <LinkArrow className='w-5 ml-1'/>
                </Link>
                <Link href='mailto:pgiahuy653@gmail.com' target='_blank' className='font-semibold hover:underline ml-6
                dark:text-light
                ' >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
