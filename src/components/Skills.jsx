import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.png';
import PHP from '../assets/php.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Kali from '../assets/kali.png';

const Skills = () => {
    return (
        <div name='skills' className='bg-[#111827] text-gray-300 w-full h-screen'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#0a0f18] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#0a0f18] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#0a0f18] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#0a0f18] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PHP} alt="PHP icon" />
                        <p className='my-4'>PHP</p>
                    </div>
                    <div className='shadow-md shadow-[#0a0f18] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#0a0f18] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="ReactImg icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#0a0f18] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#0a0f18] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Kali} alt="Kali icon" />
                        <p className='my-4'>KALI LINUX</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills