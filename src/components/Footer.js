import React from 'react'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full border-solid border-dark border-t-2 dark:border-light'>
            <Layout className='py-8 flex items-center justify-between'>
                <p>
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </p>
                <p>
                    Make with <span className='text-pink-600'>&#9825;</span> by me</p>
                <p>
                    Very happy if i can work with your team
                </p>
            </Layout>
        </footer>
    )
}

export default Footer