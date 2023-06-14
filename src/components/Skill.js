import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Tooltip } from '@nextui-org/react'


const SkillText = ({ name, x, y }) => {
    return <motion.div className='bg-dark dark:bg-light dark:text-dark text-light text-md font-bold rounded-full absolute py-2.5 px-5 cursor-pointer lg:p-1 lg:px-2 md:!bg-transparent md:text-dark md:dark:text-white'
        whileInView={{ x, y }}
        whileHover={{ scale: 1.06 }}
        initial={{ x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
    >
        {name}
    </motion.div>
}

const SkillText2 = ({ name, x, y, srcImg, toolTip }) => {


    return <motion.div className='border  border-black rounded-full absolute'
        whileInView={{ x, y }}
        whileHover={{ scale: 1.06 }}
        initial={{ x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
    >
        <Tooltip content={toolTip} color="invert" >
            <Image priority loader={() => srcImg} src={srcImg} alt={toolTip} className='rounded-full bg-white object-cover w-12 h-12 p-1 md:p-0.5 md:w-7 md:h-7' width={40} height={40} data-tip='Tooltip text' />
        </Tooltip>
    </motion.div>
}
const Skill = () => {
    return (
        <>
            <h2 className='text-6xl font-bold text-center mt-16 mb-14'>Skills</h2>
            <div className='w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center  mb-64 md:mb-32 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]  '>
                <motion.div className='bg-dark dark:bg-light text-light text-lg font-bold p-5 rounded-full dark:text-dark md:!bg-none md:p-1 px-2 hover:cursor-pointer'
                    whileHover={{ scale: 1.06 }}
                >
                    Skills
                </motion.div>
                <SkillText2 x='-5vw' y='-10vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/09/bs_v1.png' toolTip='Boostrap' />
                <SkillText2 x='30vw' y='10vw' srcImg='https://www.drupal.org/files/project-images/screenshot_361.png' toolTip='Tailwind' />
                <SkillText2 x='20vw' y='-10vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/09/github_v1.png' toolTip='Github' />
                <SkillText2 x='-20vw' y='5vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/09/sass_v1.png' toolTip='SASS' />
                <SkillText2 x='15vw' y='-18vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/09/react.png' toolTip='React' />
                <SkillText2 x='-33vw' y='0vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/10/redux.png' toolTip='Redux thunk/saga/toolkit' />
                <SkillText2 x='-5vw' y='18vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/09/typescript-_v1.png' toolTip='Typescript' />
                <SkillText2 x='28vw' y='-2vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/09/postman_v1.png' toolTip='Postman' />
                <SkillText2 x='-33vw' y='10vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/09/nodejs_v1.png' toolTip='NodeJS' />
                <SkillText2 x='-33vw' y='-14vw' srcImg='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png' toolTip='Prisma' />
                <SkillText2 x='-20vw' y='-5vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/09/mysql_v1.jpg' toolTip=' MYSQL' />
                {/* <SkillText2 x='-20vw' y='-12vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/09/docker_v1.png' toolTip='Docker' /> */}
                <SkillText2 x='5vw' y='10vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/10/nesjs.png' toolTip='NestJS' />
                {/* <SkillText2 x='-0vw' y='-15vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/10/graphQl.png' toolTip='GraphQL' /> */}
                <SkillText2 x='0vw' y='-22vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/10/sequelize.png' toolTip='Sequelize' />
                <SkillText2 x='-5vw' y='10vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/10/express-1.png' toolTip='ExpressJS' />
                <SkillText2 x='20vw' y='16vw' srcImg='https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png' toolTip='Styled-component' />
                <SkillText2 x='15vw' y='0vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2022/09/swagger_v1.png' toolTip='Swagger' />
                <SkillText2 x='-20vw' y='20vw' srcImg='https://cybersoft.edu.vn/wp-content/uploads/2023/01/socketio.png' toolTip='Socket.io' />
            </div>
        </>
    )
}

export default Skill