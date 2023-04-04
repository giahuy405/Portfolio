import React from 'react'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full border-solid border-dark border-t-2'>
            <Layout className='py-8 flex items-center justify-between'>
                <p>
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </p>
                <p>
                    Make with <span className='text-pink-600'>&#9825;</span> by me</p>
                <p>
                    dsa dsa fads ds fds
                </p>
            </Layout>
        </footer>
    )
}

export default Footer