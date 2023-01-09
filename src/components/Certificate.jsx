import React from 'react'
import Devlap from '../assets/Certificates/devlap.png';
import basicSQL from '../assets/Certificates/basicSQL.png';
const Certificate = () => {
    return (
        <div name='certificates' className='w-full md:h-screen text-gray-300 bg-[#111827]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Certificates</p>
                    <p className='py-6'>// Check out some of my recent certificates</p>
                </div>

                {/* Container */}
                <div
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Devlap})` }} className='shadow-lg shadow-[#0a0f18] group container rouded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                DEVLAP BorntoDev
                            </span>
                            <div className='pt-8 text-center'>
                                <a href={Devlap} target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Full Image</button>
                                </a>
                                <a href="https://www.borntodev.com/devlab/certificate_online/6ed7817364314a4906b029afc465af37" target="_blank" rel='noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${basicSQL})` }} className='shadow-lg shadow-[#0a0f18] group container rouded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                BasicSQL HackerRank
                            </span>
                            <div className='pt-8 text-center'>
                                <a href={basicSQL} target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Full Image</button>
                                </a>
                                <a href="https://www.hackerrank.com/certificates/82def56f44d1" target="_blank" rel='noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Link</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Certificate