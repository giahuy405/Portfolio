import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'
const Detail = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[55%] mx-auto flex flex-col   justify-between !text-left'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl w-full'>{type}</h3>
            <span className='capitalize text-dark/75 w-full  '>
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
            <h2 className='font-bold text-6xl text-center mb-15 mt-24'>Education</h2>
            <div ref={ref} className='w-[55%] mx-auto relative '>
                {/* Line */}
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-8 top-1 w-[4px] h-full bg-dark origin-top' ></motion.div>
                {/* Education */}
                <ul className='w-full flex flex-col items-start mt-14 text-left pb-32'>
                    <Detail
                        type='The Degree Of Associate IT'
                        time='2020-2023 '
                        place='Cao Thang technical college'
                        info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering.'
                    />
                    <Detail
                        type='Cybersoft Academy'
                        time='9/2022-8/2023'
                        place='Cao Thang technical college'
                        info='Learn React ecosystem for FE and NodeJS ecosystem for BE.'
                    />

                </ul>
            </div>
        </div>
    )
}

export default Education