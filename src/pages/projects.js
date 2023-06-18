import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tixMovie from '../../public/images/projects/tix-movie.png'
import jira from '../../public/images/projects/jira-clone.png'
import masterwork from '../../public/images/projects/master-work.png'
import poochcare from '../../public/images/projects/pooch-care.png'
import tabula from '../../public/images/projects/tabula.png'
import toDoList from '../../public/images/projects/to-do-list.png'
import photoEditor from '../../public/images/projects/photo-editor.png'
import xucXac from '../../public/images/projects/xuc-xac.png'
import TransitionEffect from '@/components/TransitionEffect'
const FeatureProject = ({ type, title, summary, img, link, github }) => {
    return <article className=' bg-light flex items-center justify-between rounded-3xl border-2 border-dark gap-5 p-10 dark:bg-dark
    dark:border-light md:flex-col md:p-3
    '>
        <Link href={link} target='_blank' className='w-1/2 md:w-full cursor-pointer overflow-hidden rounded-l-3xl rounded-r-xl '>
            <Image priority src={img} alt='title' className='w-full hover:scale-105 duration-300' />
        </Link>
        <div className='w-1/2 md:w-full'>
            <span className='text-primary text-xl font-semibold  '>{type}</span>
            <Link href={link} target='_blank' className='text-3xl font-bold my-4 md:text-lg'>
                <h2>{title}</h2>
            </Link>
            <p className='mb-3'>{summary}</p>
            <div className='flex'>
                <Link href={github} target='_blank'><GithubIcon className='!w-[40px]' /></Link>
                <Link href={link} target='_blank' className='bg-dark text-light ml-5 text-lg font-semibold rounded-lg py-2.5 px-6 dark:bg-white dark:text-dark'>Visit Website</Link>
            </div>
        </div>
        <div className='absolute top-0 -right-3.5 -z-10 h-[103%] w-[101%] rounded-[3rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] ' />
    </article>
}
const TemplateProject = ({ type, title, summary, img, link, github }) => {
    return <article className=' bg-light  rounded-3xl border-2 border-dark gap-5 p-6  dark:bg-dark md:p-3
    dark:border-light'>
        <div className='cursor-pointer overflow-hidden rounded-2xl w-full'>
            <Link href={link} target='_blank' className=''>
                <Image priority src={img} alt='title' className='w-full object-cover max-h-[230px]  hover:scale-105 duration-300  ' />
            </Link>
        </div>
        <div className=''>
            <span className='text-primary text-xl font-semibold'>{type}</span>
            <Link href={link} target='_blank' className='text-3xl font-bold my-4'>
                <h2>{title}</h2>
            </Link>
            <p className='mb-3'>{summary}</p>
            <div className='flex'>
                <Link href={github} target='_blank'><GithubIcon className='!w-[40px]' /></Link>
                <Link href={link} target='_blank' className='bg-light text-dark ml-5 text-lg   rounded-lg py-2.5 px-6
                 border border-dark  hover
                '>Visit Website</Link>
            </div>
        </div>
        <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[3rem] rounded-br-3xl bg-dark dark:bg-light  md:-right-[14px] md:w-[102%] xs:h-[102%] xs:rounded-[2rem]  ' />
    </article>
}
const projects = () => {
    return (
        <>
            <Head>
                <title>Phạm Gia Huy | Project Page</title>
                <meta name='description' content='any description' />
                <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Eo_circle_blue_letter-p.svg/480px-Eo_circle_blue_letter-p.svg.png" />
            </Head>
            <TransitionEffect />
            <main className='mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-14'>
                    <AnimatedText text={`The best way to learn new things is build projects`} className='!text-6xl   lg:!text-5xl md:!text-4xl sm:!text-3xl ' />
                    <div className='text-center'>
                        <button className='underline mt-4 text-3xl text-red-500'><a href='https://www.youtube.com/watch?v=pzTrI6V9LBM&list=PL79mICTSqo26IDhL4M106tdWynyapwoSi' target='_blank'>Video demo  </a></button>
                        <br/>
                        <button className='underline mt-4 text-3xl text-purple-500'><a href='https://zircon-chips-18c.notion.site/All-Projects-cbbdb4ea48c7405b91ca956b8c22a2d7?pvs=4' target='_blank'>Notion all projects</a></button>
                    </div>
                    <div className='grid grid-cols-2 gap-24 mt-10'>
                        <div className='col-span-2 relative'>
                            <FeatureProject
                                title='TIX Movie - booking ticket'
                                summary='This is a web application for a movie theater that allows users to buy tickets, reserve seats and manage their bookings. The website also includes an admin panel that allows administrators to manage movies, showtimes, seats and bookings. Also has dark/light mode.  Built with React, Redux-thunk, Tailwind, antd... '
                                link='https://movie-2-llpf.vercel.app'
                                type='Featured Project*'
                                img={tixMovie}
                                github='https://github.com/giahuy405/Movie-2'
                            />
                        </div>
                        <div className='col-span-1 md:col-span-2 relative'>
                            <TemplateProject
                                title='To Do List'
                                summary='A to do list app. Built with style-component'
                                link='https://to-do-list-styled-component.vercel.app'
                                type='Featured Project'
                                img={toDoList}
                                github='https://github.com/giahuy405/ToDoList---styledComponent'
                            />
                        </div>
                        <div className='col-span-1 md:col-span-2 md:col-span-2 relative'>
                            <TemplateProject
                                title='Pooch care'
                                summary='The responsive website 8 pages. Dark/light theme '
                                link='https://pooch-care-theta.vercel.app'
                                type='Template Website'
                                img={poochcare}
                                github='https://github.com/giahuy405/PoochCare'
                            />
                        </div>
                        {/* NEXT */}
                        <div className='col-span-2 relative'>
                            <FeatureProject
                                title='TIX Movie - booking ticket'
                                summary='The project consists of a landing page, a login/signup feature, and a page with a Kanban board for managing tasks. Users can perform CRUD (Create, Read, Update, and Delete) operations for tasks, projects, and users. The project also includes a dark mode feature.Tech : React, Redux-Saga, Tailwind, antd,... '
                                link='https://jira-amber.vercel.app'
                                type='Featured Project*'
                                img={jira}
                                github='https://github.com/giahuy405/Jira'
                            />
                        </div>
                        <div className='col-span-1 md:col-span-2 relative'>
                            <TemplateProject
                                title='Master Work'
                                summary='3 pages(Home,Service,Landing-page)'
                                link='https://masterwork-ruddy.vercel.app'
                                type='Template Website'
                                img={masterwork}
                                github='https://github.com/giahuy405/MasterWork'
                            />
                        </div>
                        <div className='col-span-1 md:col-span-2 relative'>
                            <TemplateProject
                                title='Tabula'
                                summary='Using SCSS'
                                link='https://tabula-tan.vercel.app'
                                type='Template Website'
                                img={tabula}
                                github='https://github.com/giahuy405/Tabula'
                            />
                        </div>
                        {/* ROW 3 */}
                        <div className='col-span-1 md:col-span-2 relative'>
                            <TemplateProject
                                title='Photo Editor'
                                summary='The website edit the photo from your URL img.'
                                link='https://photo-editor-two.vercel.app'
                                type='Featured Project'
                                img={photoEditor}
                                github='https://github.com/giahuy405/Photo-Editor'
                            />
                        </div>
                        <div className='col-span-1 md:col-span-2 relative'>
                            <TemplateProject
                                title='Dice Game'
                                summary='A game built with React, Redux'
                                link='https://dice-game-eight-mu.vercel.app'
                                type='Featured Project'
                                img={xucXac}
                                github='https://github.com/giahuy405/Dice-game'
                            />
                        </div>

                    </div>

                </Layout>
            </main>
        </>
    )
}

export default projects