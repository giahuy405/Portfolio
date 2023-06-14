import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'
const Detail = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto md:w-[80%] md:ml-10vw  flex flex-col justify-between !text-left'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl w-full md:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize text-dark/75 w-full  dark:text-gray-400'>
                {time} | {place}
            </span>
            <p className='text-[19px leading-5 mt-2'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    return (
        <div>
            <h2 className='font-bold text-6xl text-center mb-22 mt-0'>Education</h2>
            <div ref={ref} className='w-[55%] md:w-[95%] sm:w-[100%] mx-auto relative '>
                {/* Line */}
                <motion.div
                    style={{ scaleY: scrollYProgress, boxShadow: '0 15px 15px 1px rgba(80,230,217,.4)' }}
                    className='absolute left-5 top-1 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-4xl md:w-[2px] md:left-[22px] xs:left-[16px]' ></motion.div>
                {/* Education */}
                <ul className='w-full flex flex-col items-start mt-14 text-left pb-36 md:pb-40 md:ml-5'>
                    <Detail
                        type='Electronic Telecommunication'
                        time='2020-2023'
                        place='Cao Thang technical college'
                        info='Relevant courses included Computer Systems Engineering, Embedded programming and network.'
                    />
                    <Detail
                        type='Cybersoft Academy Degree'
                        time='7/2022-7/2023'
                        place='Cybersoft Academy'
                        info='Learn React ecosystem for FE and NodeJS ecosystem for BE.'
                    />

                </ul>
            </div>
        </div>
    )
}

export default Education