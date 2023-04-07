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
const FeatureProject = ({ type, title, summary, img, link, github }) => {
    return <article className=' bg-light flex items-center justify-between rounded-3xl border-2 border-dark gap-5 p-10 '>
        <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-l-3xl rounded-r-xl '>
            <Image src={img} alt='title' className='w-full hover:scale-105 duration-300' />
        </Link>
        <div className='w-1/2'>
            <span className='text-primary text-xl font-semibold'>{type}</span>
            <Link href={link} target='_blank' className='text-3xl font-bold my-4'>
                <h2>{title}</h2>
            </Link>
            <p className='mb-3'>{summary}</p>
            <div className='flex'>
                <Link href={github} target='_blank'><GithubIcon className='w-[40px]' /></Link>
                <Link href={link} target='_blank' className='bg-dark text-light ml-5 text-lg font-semibold rounded-lg py-2.5 px-6'>Visit Website</Link>
            </div>
        </div>
        <div className='absolute top-0 -right-[10px] w-[100%] h-[103%] -z-10 bg-dark rounded-[2rem] rounded-br-3xl' />
    </article>
}
const TemplateProject = ({ type, title, summary, img, link, github }) => {
    return <article className=' bg-light  rounded-3xl border-2 border-dark gap-5 p-6 '>
        <div className='cursor-pointer overflow-hidden rounded-2xl w-full'>
            <Link href={link} target='_blank' className=''>
                <Image src={img} alt='title' className='w-full object-cover max-h-[230px]  hover:scale-105 duration-300  ' />
            </Link>
        </div>
        <div className=''>
            <span className='text-primary text-xl font-semibold'>{type}</span>
            <Link href={link} target='_blank' className='text-3xl font-bold my-4'>
                <h2>{title}</h2>
            </Link>
            <p className='mb-3'>{summary}</p>
            <div className='flex'>
                <Link href={github} target='_blank'><GithubIcon className='w-[40px]' /></Link>
                <Link href={link} target='_blank' className='bg-light text-dark ml-5 text-lg   rounded-lg py-2.5 px-6
                 border border-dark  hover
                '>Visit Website</Link>
            </div>
        </div>
        <div className='absolute top-0 -right-[10px] w-[100%] h-[103%] -z-10 bg-dark rounded-[2rem] rounded-br-3xl' />
    </article>
}
const projects = () => {
    return (
        <>
            <Head>
                <title>Phạm Gia Huy | Project Page</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-14'>
                    <AnimatedText text={`"It’s not a bug. It’s just an undocumented feature!”`} className='!text-6xl' />
                    <div className='text-center'>
                        <button className='underline mt-4  '><a href='https://www.youtube.com/watch?v=i1G7qKO2WcI&t=169s' target='_blank'>10 min demo all project </a></button>
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
                        <div className='col-span-1 relative'>
                            <TemplateProject
                                title='To Do List'
                                summary='A to do list app. Built with style-component'
                                link='https://to-do-list-styled-component.vercel.app'
                                type='Featured Project'
                                img={toDoList}
                                github='https://github.com/giahuy405/ToDoList---styledComponent'
                            />
                        </div>
                        <div className='col-span-1 relative'>
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
                        <div className='col-span-1 relative'>
                            <TemplateProject
                                title='Master Work'
                                summary='The responsive website 3 pages(Home,Service,Landing-page)'
                                link='https://masterwork-ruddy.vercel.app'
                                type='Template Website'
                                img={masterwork}
                                github='https://github.com/giahuy405/MasterWork'
                            />
                        </div>
                        <div className='col-span-1 relative'>
                            <TemplateProject
                                title='Tabula'
                                summary='Using SCSS'
                                link='https://tabula-tan.vercel.app'
                                type='Featured Project'
                                img={tabula}
                                github='https://github.com/giahuy405/Tabula'
                            />
                        </div>
                        {/* ROW 3 */}
                        <div className='col-span-1 relative'>
                            <TemplateProject
                                title='Photo Editor'
                                summary='The website edit the photo from your URL img.'
                                link='https://photo-editor-two.vercel.app'
                                type='Featured Project'
                                img={photoEditor}
                                github='https://github.com/giahuy405/Photo-Editor'
                            />
                        </div>
                        <div className='col-span-1 relative'>
                            <TemplateProject
                                title='Tabula'
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