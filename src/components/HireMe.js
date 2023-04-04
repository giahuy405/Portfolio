import React from 'react'
import { CircularText, HireMeIcon } from './Icons'
import Link from 'next/link'

const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4 overflow-hidden flex justify-center items-center'>
            <div className='w-48 h-auto relative'>
                <CircularText className={`fill-dark animate-spin-slow  `} />
                <Link href='mailto:@pgiahuy653@gmail.com' className='absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light rounded-full w-20 h-20 flex justify-center items-center hover:bg-light hover:text-dark border border-dark duration-300 font-semibold'>
                    Hire me
                </Link>
            </div>  
        </div>
    )
}

export default HireMe