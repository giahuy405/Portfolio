import React from 'react'
import { motion } from 'framer-motion'

const SkillText = ({ name, x, y }) => {
    return <motion.div className='bg-dark dark:bg-light dark:text-dark text-light text-md font-bold  rounded-full absolute py-2.5 px-5 cursor-pointer '
        whileInView={{ x, y }}
        whileHover={{ scale: 1.06 }}
        initial={{ x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
    >
        {name}
    </motion.div>
}

const Skill = () => {
    return (
        <>
            <h2 className='text-6xl font-bold text-center mb-14'>Skills</h2>
            <div className='w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center  mb-64 md:mb-32 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]  '>
                <motion.div className='bg-dark dark:bg-light text-light text-lg font-bold p-5 rounded-full dark:text-dark' 
                    whileHover={{ scale: 1.06 }}
                >
                    Skills
                </motion.div>
                <SkillText name='CSS' x='-5vw' y='-10vw' />
                <SkillText name='HTML/CSS' x='-5vw' y='-10vw' />
                <SkillText name='Tailwind' x='30vw' y='10vw' />
                <SkillText name='Boostrap' x='20vw' y='-10vw' />
                <SkillText name='MYSQL' x='-20vw' y='5vw' />
                <SkillText name='JS/TS' x='38vw' y='0vw' />
                <SkillText name='REACT' x='-33vw' y='0vw' />
                <SkillText name='SASS' x='-33vw' y='10vw' />
                <SkillText name='StyleComponent' x='-5vw' y='18vw' />
                <SkillText name='EXPRESS.JS' x='24vw' y='0vw' />
                <SkillText name='NEST.JS' x='-33vw' y='-10vw' />
                <SkillText name='ORM' x='0vw' y='-16vw' />
                <SkillText name='GRAPHQL/SOCKET.IO' x='5vw' y='10vw' />
            </div>
        </>
    )
}

export default Skill