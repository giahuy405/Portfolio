import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import developer from '../../public/images/profile/develop3.jpg'
import { LinkArrow } from '@/components/Icons'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'
const about = () => {
    return (
        <>
            <Head>
                <title>Phạm Gia Huy | About Page</title>
                <meta name='description' content='any description' />
                <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Eo_circle_blue_letter-p.svg/480px-Eo_circle_blue_letter-p.svg.png" />
            </Head>
            <TransitionEffect/>
            <main className='flex w-ful flex-col items-center justify-center'>
                <Layout className='pt-14'>
                    <AnimatedText text={`"It’s not a bug. It’s just an undocumented feature!”`} className='!text-6xl  lg:!text-5xl md:!text-4xl sm:!text-3xl ' />
                    <div className='grid grid-cols-2 py-20 md:py-10 items-center '>
                        <div className='col-span-1 md:col-span-2 md:order-2'>
                            <h3 className='text-dark/75 text-xl font-semibold dark:text-white'>Biography</h3>
                            <div className='text-md pt-4'>
                                <>Hi, I am  <span className='font-bold'>Huy</span>, a web developer with a passion for creating beautiful, functional. I am always study new things everyday as you can see it on my&nbsp;
                                    <a target={`_blank`} className='underline font-semibold' href='https://github.com/giahuy405'>
                                        Github commit status
                                    </a>
                                </>
                                <p className='my-4'>
                                    Website built from 2022 onwards. I believe that it needs even better UI/UX. Will make it more worth the money that the customer spends. So that is the reason why CSS take ~50% in my github status.
                                </p>
                                <p className='  mb-4'>
                                    <>I also read some book about UI/UX like this </>
                                    <a
                                        className='flex items-center underline font-semibold'
                                        // download={true}
                                        href='/50_ui_tips.pdf' target={`_blank`} > UI/UX tips PDF
                                    </a>
                                </p>
                                <p>And I like to watch YouTube tutorials on Sundays. That is the place i learned a lot. Learn how to draw, solve rubik, swim, play games technique, pronunciation English, programming skills...</p>
                            </div>
                        </div>
                        <div className='col-span-1 md:col-span-2 md:order-1 md:mb-10'>
                            <div className='relative p-10 border-2 border-dark rounded-2xl bg-light max-w-[300px] mx-auto dark:bg-dark dark:border-light'>
                                <div className='absolute top-0 -right-3 w-[102%] h-[103%] -z-10 bg-dark rounded-[2rem] rounded-br-3xl dark:bg-light' />
                                <Image priority src={developer} alt='123' className='rounded-2xl' />
                            </div>
                        </div>
                    </div>
                    <Skill />
                    {/* <Experience /> */}
                    <Education />
                </Layout>
            </main>
        </>

    )
}

export default about