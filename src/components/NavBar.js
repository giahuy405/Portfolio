import Logo from './Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FacebookIcon, GithubIcon, MoonIcon, SunIcon, TwitterIcon, YoutubeIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    // console.log(router.asPath)
    return <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={`h-0.5 inline-block bg-black absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}>&nbsp;</span>
    </Link>
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href='/' title='Home' />
                <CustomLink href='/about' title='About' className='mx-8' />
                <CustomLink href='/projects' title='Project' className='mr-8' />
                <CustomLink href='/article' title='Articles' />
            </nav>
            <nav className='flex items-center gap-4'>
                <motion.a href='https://github.com/giahuy405' target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <GithubIcon />
                </motion.a>
                <motion.a href='https://www.youtube.com/channel/UCBt5JwDxsTFmwFwaz8rDuUA' target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <YoutubeIcon />
                </motion.a>
                <motion.a href='https://www.facebook.com/profile.php?id=100088089417691' target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}>
                    <FacebookIcon />
                </motion.a>
                {/* <Link href='/' target={"_blank"}>
                    <TwitterIcon />
                </Link> */}
                <button
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    className={`p-1 rounded-full hover:bg-gray-500  
                    ${mode === 'light' ? "bg-dark text-light" : "bg-white text-dark"}
                    `}
                >
                    {
                        mode === 'dark' ?
                            <SunIcon className='fill-dark' />
                            :
                            <MoonIcon className='fill-dark' />
                    }
                </button>
            </nav>
            <div className='absolute left-[50%] translate-x-[-50%] mt-2'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar