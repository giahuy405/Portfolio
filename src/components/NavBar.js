import Logo from './Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { FacebookIcon, GithubIcon, MoonIcon, SunIcon, TwitterIcon, YoutubeIcon } from './Icons'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    // console.log(router.asPath)
    return <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={`h-0.5 inline-block bg-black absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease   dark:bg-light
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}>&nbsp;</span>
    </Link>
}
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const handleClick = () => {
        toggle()
        router.push(href)
    }
    return <button className={`${className} relative group`} onClick={handleClick}>
        <p className='dark:text-dark text-light'>{title}</p>
        <span className={`h-0.5 inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease   
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}>&nbsp;</span>
    </button>
}
const NavBar = () => {
    // const [themeMode, setThemeMode] = useThemeSwitcher();
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    // Dùng với thư viện dark mode in nextjs
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // useEffect(() => {

    //     function handleClickOutside(e) {
    //         if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    //     }
    //     if (ref.current) {
    //         document.addEventListener("mousedown", handleClickOutside);
    //     }
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [ref.current]);
    if (!mounted) return null;
    return (
        <header className='w-full px-32 md:px-8 py-8 font-medium flex items-center justify-between md:mb-6'>

            <button className='lg:flex flex-col justify-center items-center hidden' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} `}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='flex justify-between w-full lg:hidden'>
                <nav>
                    <CustomLink href='/' title='Home' />
                    <CustomLink href='/about' title='About' className='mx-8' />
                    <CustomLink href='/projects' title='Project' className='mr-8' />
                    <button className='cursor-not-allowed'>Articles</button>
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
                        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                        className={`p-1 rounded-full hover:bg-gray-500  
                    ${currentTheme === 'light' ? "bg-dark text-light" : "bg-white text-dark"}
                    `}
                        aria-label='theme-switcher'
                    >
                        {
                            currentTheme === 'dark' ?
                                <MoonIcon className='fill-dark' />
                                :
                                <SunIcon className='fill-dark' />
                        }
                    </button>
                </nav>
            </div>
            {/* Nav Mobile */}
            {isOpen &&
                // ref bộc bên ngoài do thằng motion.div ko ăn ref 
                <div  >
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className='min-w-[70vw] max-w-[95vw] flex flex-col justify-between w-full items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-sm py-32'>
                        <nav className='flex flex-col items-center justify-center gap-5'>
                            <CustomMobileLink href='/' title='Home' toggle={handleClick} />
                            <CustomMobileLink href='/about' title='About' className='' toggle={handleClick} />
                            <CustomMobileLink href='/projects' title='Project' className='' toggle={handleClick} />
                            <button className='cursor-not-allowed text-light dark:text-dark mb-10'>Articles</button>
                        </nav>
                        <nav className='flex items-center gap-6'>
                            <motion.a href='https://github.com/giahuy405' target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <GithubIcon className='w-8 border border-light rounded-full bg-light dark:border-light dark:bg-dark' />
                            </motion.a>
                            <motion.a href='https://www.youtube.com/channel/UCBt5JwDxsTFmwFwaz8rDuUA' target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <YoutubeIcon className='w-8' />
                            </motion.a>
                            <motion.a href='https://www.facebook.com/profile.php?id=100088089417691' target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}>
                                <FacebookIcon className='w-8' />
                            </motion.a>
                            {/* <Link href='/' target={"_blank"}>
               <TwitterIcon />
           </Link> */}
                            <button
                                onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                                className={`p-1 rounded-full hover:bg-gray-500  border
                            ${currentTheme === 'light' ? "bg-dark text-light  border-light" : "bg-white text-dark border-dark"}
                            `}
                                aria-label='theme-switcher'
                            >
                                {
                                    currentTheme === 'dark' ?
                                        <MoonIcon className='fill-dark' />
                                        :
                                        <SunIcon className='fill-dark' />
                                }
                            </button>
                        </nav>
                        <div className='absolute z-50 top-5 right-4 cursor-pointer text-2xl dark:text-dark text-light hover:bg-gray-400  w-10 h-10 text-center leading-10 rounded-full'
                        onClick={handleClick}
                        >
                            X
                        </div>
                    </motion.div>
                </div>
            }
            <div className='absolute left-[50%] translate-x-[-50%] mt-2'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar