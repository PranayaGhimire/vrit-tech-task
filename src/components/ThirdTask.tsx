'use client'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import Image from "next/image";
import reactIcon from "../assets/reactIcon.svg";
import groupIcon from "../assets/Group.svg";
import vueIcon from "../assets/vueIcon.svg";
import pencilIcon from "../assets/pencilIcon.svg";
const ThirdTask = () => {
  return (
    <div className='p-10'>
         <div className="flex flex-col gap-[20px]">
            <h1 className="text-[#414141] text-[24px] ">Explore our classes and master trending skills! </h1>
            <h2 className="text-[32px] font-bold">Dive into <span className="text-[#1DA077]">What's Hot Right Now!</span>🔥</h2>
            <div className="flex gap-[32px]">
                <div className="bg-[#C33241] rounded-[32px] p-[26px] text-white">
                    <div className="flex gap-[8px] justify-end-safe items-center">
                        <p className="text-[18px] font-semibold">View all Courses</p>
                        <motion.div
                            whileHover={{ 
                            x: [0,15,0], 
                            transition:{
                                duration:1,
                                repeat:Infinity,
                                repeatType:'loop',
                                ease:'easeInOut',
                            },
                        }}
                        >
                            <FaArrowRight  />
                        </motion.div>
                 
                    </div>
                    <div className="flex gap-[42px] items-center">
                        <div>
                            <Image src={reactIcon} alt=""/>
                        </div>
                        <div>
                            <Image src={groupIcon} alt=""/>
                        </div>
                        <div>
                            <Image src={vueIcon} alt=""/>
                        </div>
                        <div>
                            <Image src={pencilIcon} alt=""/>
                        </div>
                    </div>
                    <div className="flex gap-[24px] items-center text-white">
                        <div className="text-[150px] font-bold">
                            23 <sup>+</sup>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <p className="text-[32px] font-bold">All Courses</p>
                            <p className="text-[18px] font-normal">courses you're powering through right now</p>
                        </div>
                    </div>
                </div>
                <div className="bg-red-50 rounded-[32px] group">
                    <div className="flex flex-col gap-[24px]  p-[26px]">
                        <div className="w-[218px] h-[138px] flex flex-col gap-[12px] text-[#C33241] -rotate-90 mt-10">
                            <p className="text-[32px] font-bold">Upcoming Courses </p>
                            <p className="text-[18px]">exciting new courses waiting to boost your skills.</p>
                        </div>
                        <div className="text-[#C33241] text-[150px] font-bold">
                            05<sup className='inline-block transition-transform duration-400 group-hover:translate-y-2'>+</sup>
                        </div>
                    </div>
                </div>
                <div className="bg-red-50 rounded-[32px] group ">
                    <div className="flex flex-col gap-[24px]  p-[26px]">
                        <div className="w-[218px] h-[138px] flex flex-col gap-[12px] text-[#C33241] -rotate-90 mt-10">
                            <p className="text-[32px] font-bold">Ongoing Courses </p>
                             <p className="text-[18px]">currently happening - don't miss out on the action!.</p>
                        </div>
                        <div className="text-[#C33241] text-[150px] font-bold">
                            10<sup className='inline-block transition-transform duration-400 group-hover:translate-y-2'>+</sup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdTask
