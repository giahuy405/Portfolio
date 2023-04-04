import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import developer from '../../public/images/profile/develop3.jpg'
const about = () => {
    return (
        <>
            <Head>
                <title>Phạm Gia Huy | About Page</title>
                <meta name='description' content='any description' />
            </Head>
            <main className=''>
                <Layout className='pt-16'>
                    <AnimatedText text='I just find myself happy with the simple things.' className='!text-6xl' />
                    <div className='grid grid-cols-2 gap-20 mt-5 max-w-[800px] mx-auto'>
                        <div className='col-span-1'>
                            <h2 className='text-2xl'>Biography</h2>
                            <p>
                                I like to read manga/manhua/manhwa when i have sparetime. And, i like to study tutorials of senior developer on youtube.  I like to read manga/manhua/manhwa when i have sparetime. And, i like to study tutorials of senior developer on youtube.  I like to read manga/manhua/manhwa when i have sparetime. And, i like to study tutorials of senior developer on youtube.  I like to read manga/manhua/manhwa when i have sparetime. And, i like to study tutorials of senior developer on youtube.  I like to read manga/manhua/manhwa when i have sparetime. And, i like to study tutorials of senior developer on youtube.
                            </p>
                        </div>
                        {/* <div className='col-span-1 relative h-max rounded-2xl border-2 border-dark  bg-light p-8'>
                            <div className='absolute top-0 -right-3  w-[102%] h-[103%] bg-dark rounded-2xl' />
                            <Image src={developer} alt='profile' className='rounded-2xl h-auto w-full ' />
                        </div>   */}
                        <div className='col-span-1'>
                            
                        </div>
                    </div>
                </Layout>
            </main>
        </>

    )
}

export default about