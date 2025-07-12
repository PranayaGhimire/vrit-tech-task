'use client'
import Image from 'next/image'
import React from 'react'
import firstPerson from "../assets/firstPerson.svg";
import secondPerson from "../assets/secondPerson.svg";
import thirdPerson from "../assets/thirdPerson.svg";
import fourthPerson from "../assets/fourthPerson.svg";
import { motion } from 'framer-motion';
const SecondTask = () => {
  return (
    <div className='p-24'>
        <div className='space-y-[48px]'>
            <div className='space-y-[24px]'>
                <p className='text-[24px] font-medium text-[#414141]'>Your SkillShikshya Journey</p>
                <p className='text-[32px] font-bold'>
                    <span className='text-[#1DA077]'>Step</span> In. <span className='text-[#1DA077]'>Skill</span> Up. <span className='text-[#1DA077]'>Stand</span> Out. 🚀
                </p>
            </div>
            <div className='flex gap-[32px] flex-wrap'>
                {/* First */}
                <div className='flex flex-col justify-center items-end-safe w-[592px] h-[341px] bg-[#F45B5B] rounded-[30px] text-white p-[20px]'>
                    <div className='flex  relative'>
                        <motion.div
                           
                            >
                             <Image src={firstPerson} alt='' className='absolute right-82 -top-15 animate-bounce'/>
                        </motion.div>
                       
                        <div className='w-[351px] h-[225px] flex flex-col gap-[32px]'>
                            <div className='flex flex-col items-center gap-[10px]'>
                                <p className='text-[32px] font-bold'>Start with Clarity</p>
                                <p className='text-[24px] font-medium'>Step into a better learning path.</p>
                            </div>
                            <p className='text-center'>Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.</p>
                        </div>
                    </div>
                </div>
                {/* Second */}
               <div className='flex flex-col justify-center  w-[592px] h-[341px] bg-[#5492A0] rounded-[30px] text-white p-[20px]'>
                    <div className='flex   relative'>
                        <Image src={secondPerson} alt='' className='absolute left-[330px] -top-[55px] animate-bounce'/>
                        <div className='w-[351px] h-[225px] flex flex-col gap-[32px]'>
                            <div className='flex flex-col  gap-[10px]'>
                                <p className='text-[32px] font-bold'>Learn by Doing</p>
                                <p className='text-[24px] font-medium'>Practical skills, real projects.</p>
                            </div>
                            <p className=''>
                                Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Third */}
                 <div className='flex flex-col justify-center items-end-safe  w-[592px] h-[341px] bg-[#6C64A8] rounded-[30px] text-white p-[20px]'>
                    <div className='flex   relative'>
                        <Image src={thirdPerson} alt='' className='absolute right-82 top-15 animate-bounce'/>
                        <div className='w-[351px] h-[225px] flex flex-col gap-[32px]'>
                            <div className='flex flex-col  gap-[10px]'>
                                <p className=' text-[32px] font-bold'>Get Mentored & Supported</p>
                                <p className='text-[24px] font-medium'>You are not learning alone.</p>
                            </div>
                            <p className=''>
                               Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Fourth */}
                 <div className='flex flex-col justify-center  w-[592px] h-[341px] bg-[#A88964] rounded-[30px] text-white p-[20px]'>
                    <div className='flex   relative'>
                        <Image src={fourthPerson} alt='' className='absolute left-[270px] top-7 animate-bounce'/>
                        <div className=' h-[225px] flex flex-col gap-[32px]'>
                            <div className=' flex flex-col  gap-[10px]'>
                                <p className='text-[32px] font-bold'>Achieve & Showcase</p>
                                <p className='text-[24px] font-medium'>Build your portfolio, get job ready.</p>
                            </div>
                            <p className='w-[337px] text-[18px]'>
                               Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondTask
