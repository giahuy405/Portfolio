import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'
const Detail = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[55%] mx-auto flex flex-col items-center justify-between text-left'>
    <LiIcon reference={ref} />
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{duration:0.6,type:"spring"}}
    >
      <h3 className='capitalize font-bold text-2xl w-full'>{position}&nbsp;
        <a className='text-primary' href={companyLink}>@{company}</a>
      </h3>
      <span className='capitalize text-dark/75 w-full'>
        {time} | {address} 
      </span>
      <p>
        {work}
      </p>
    </motion.div>
  </li>
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  return (
    <div>
      <h2 className='font-bold text-6xl text-center mb-15'>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative '>
        {/* Line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-8 top-1 w-[4px] h-full bg-dark origin-top' ></motion.div>
        {/* Experience */}
        <ul className='w-full flex flex-col items-start mt-14'>
          <Detail
            position='Software Engineer'
            company='Google'
            companyLink='www.google.com'
            time=' 2022-Present'
            address=' Mountain View, CA'
            work={` As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'`}
          />
          <Detail
            position='Software Engineer'
            company='Google'
            companyLink='www.google.com'
            time=' 2022-Present'
            address=' Mountain View, CA'
            work={` As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'`}
          />
          <Detail
            position='Software Engineer'
            company='Google'
            companyLink='www.google.com'
            time=' 2022-Present'
            address=' Mountain View, CA'
            work={` As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'`}
          />
         
        
        </ul>
      </div>
    </div>
  )
}

export default Experience