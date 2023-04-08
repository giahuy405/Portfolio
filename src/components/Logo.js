import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
const MotionLink = motion(Link);
const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href='/'
                className='w-16 h-16 md:border-2   bg-dark md:text-sm text-light border  flex items-center justify-center rounded-full font-bold dark:border-light'
                whileHover={{ backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"], transition:{duration:1,repeat:Infinity}}}
            >
                G.Huy
            </MotionLink>
        </div>
    )
}

export default Logo