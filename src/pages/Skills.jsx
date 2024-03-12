import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Skills = (props, ref) => {

   return (
    <motion.section 
        id="skills"
        variants={props.mainVariant}
        initial="hidden"
        animate={props.animateControl}
        ref={ref} 
        className="container flex mx-auto justify-around text-center mb-4 flex-col lg:flex-row"
    >
        <div className="w-full px-5 lg:w-1/2">
            <motion.h2 
                variants={props.childVariant}
                className="font-bold text-3xl mb-10"
            >
                Technical Skills
            </motion.h2>
            <div className="flex flex-col gap-5">
                <motion.div
                    variants={props.childVariant}
                    className="tskill"
                >
                    <div className="flex justify-between">
                        <div>Javascript</div>
                        <div>70%</div>
                    </div>
                    <div className="bg-zinc-500 w-full h-2 rounded relative">
                        <div className="tskill-percent bg-green-400 absolute h-2 rounded"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="tskill"
                >
                    <div className="flex justify-between">
                        <div>ReactJS</div>
                        <div>70%</div>
                    </div>
                    <div className="bg-zinc-500 w-full h-2 rounded relative">
                        <div className="tskill-percent bg-green-400 absolute h-2 rounded"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="tskill"
                >
                    <div className="flex justify-between">
                        <div>NodeJS</div>
                        <div>60%</div>
                    </div>
                    <div className="bg-zinc-500 w-full h-2 rounded relative">
                        <div className="tskill-percent bg-green-400 absolute h-2 rounded"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="tskill"
                >
                    <div className="flex justify-between">
                        <div>HTML</div>
                        <div>85%</div>
                    </div>
                    <div className="bg-zinc-500 w-full h-2 rounded relative">
                        <div className="tskill-percent bg-green-400 absolute h-2 rounded"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="tskill"
                >
                    <div className="flex justify-between">
                        <div>CSS</div>
                        <div>85%</div>
                    </div>
                    <div className="bg-zinc-500 w-full h-2 rounded relative">
                        <div className="tskill-percent bg-green-400 absolute h-2 rounded"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="tskill"
                >
                    <div className="flex justify-between">
                        <div>TailwindCSS</div>
                        <div>80%</div>
                    </div>
                    <div className="bg-zinc-500 w-full h-2 rounded relative">
                        <div className="tskill-percent bg-green-400 absolute h-2 rounded"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="tskill"
                >
                    <div className="flex justify-between">
                        <div>MySQL</div>
                        <div>70%</div>
                    </div>
                    <div className="bg-zinc-500 w-full h-2 rounded relative">
                        <div className="tskill-percent bg-green-400 absolute h-2 rounded"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="tskill"
                >
                    <div className="flex justify-between">
                        <div>MongoDB</div>
                        <div>50%</div>
                    </div>
                    <div className="bg-zinc-500 w-full h-2 rounded relative">
                        <div className="tskill-percent bg-green-400 absolute h-2 rounded"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="tskill"
                >
                    <div className="flex justify-between">
                        <div>Bootstrap</div>
                        <div>70%</div>
                    </div>
                    <div className="bg-zinc-500 w-full h-2 rounded relative">
                        <div className="tskill-percent bg-green-400 absolute h-2 rounded"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="tskill"
                >
                    <div className="flex justify-between">
                        <div>ExpressJS</div>
                        <div>65%</div>
                    </div>
                    <div className="bg-zinc-500 w-full h-2 rounded relative">
                        <div className="tskill-percent bg-green-400 absolute h-2 rounded"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="tskill"
                >
                    <div className="flex justify-between">
                        <div>Adobe Photoshop</div>
                        <div>80%</div>
                    </div>
                    <div className="bg-zinc-500 w-full h-2 rounded relative">
                        <div className="tskill-percent bg-green-400 absolute h-2 rounded"></div>
                    </div>
                </motion.div>
            </div>
        </div>
        <div className="w-full lg:w-1/2">
            <motion.h2 
                variants={props.childVariant}
                className="font-bold text-3xl mb-10 mt-10 lg:mt-0"
            >
                Professional Skills
            </motion.h2>
            <div className="flex flex-wrap flex-col md:flex-row">
                <motion.div 
                    variants={props.childVariant}
                    className="ps-progress-circle relative mx-auto"
                >
                    <p className="absolute w-full text-center top-1/3">80%</p>
                    <svg viewBox="0 0 100 100" className="m-auto w-2/4">
                        <path
                            fill="none"
                            stroke="#eee"
                            strokeWidth="5"
                            d="M50 2.5a47.5 47.5 0 110 95 47.5 47.5 0 110-95"
                        ></path>
                        <path
                            fill="none"
                            stroke="#555"
                            strokeDasharray="266.05px, 300px"
                            strokeDashoffset="14.925"
                            strokeWidth="5"
                            d="M50 2.5a47.5 47.5 0 110 95 47.5 47.5 0 110-95"
                        ></path>   
                    </svg>
                    <div className="mt-3">Communication</div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="ps-progress-circle relative mt-10 mx-auto lg:mt-0 md:mt-0"
                >
                    <p className="absolute w-full text-center top-1/3">90%</p>
                    <svg viewBox="0 0 100 100" className="m-auto w-2/4">
                        <path
                            fill="none"
                            stroke="#eee"
                            strokeWidth="5"
                            d="M50 2.5a47.5 47.5 0 110 95 47.5 47.5 0 110-95"
                        ></path>
                        <path
                            fill="none"
                            stroke="#555"
                            strokeDasharray="281.7px, 300px"
                            strokeDashoffset="14.925"
                            strokeWidth="5"
                            d="M50 2.5a47.5 47.5 0 110 95 47.5 47.5 0 110-95"
                        ></path>
                        
                    </svg>
                    <div className="mt-3">Team Work</div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="ps-progress-circle mt-10 relative mx-auto"
                >
                    <p className="absolute w-full text-center top-1/3">80%</p>
                    <svg viewBox="0 0 100 100" className="m-auto w-2/4">
                        <path
                            fill="none"
                            stroke="#eee"
                            strokeWidth="5"
                            d="M50 2.5a47.5 47.5 0 110 95 47.5 47.5 0 110-95"
                        ></path>
                        <path
                            fill="none"
                            stroke="#555"
                            strokeDasharray="266.05px, 300px"
                            strokeDashoffset="14.925"
                            strokeWidth="5"
                            d="M50 2.5a47.5 47.5 0 110 95 47.5 47.5 0 110-95"
                        ></path>   
                    </svg>
                    <div className="mt-3">Project Management</div>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="ps-progress-circle mt-10 relative mx-auto"
                >
                    <p className="absolute w-full text-center top-1/3">85%</p>
                    <svg viewBox="0 0 100 100" className="m-auto w-2/4">
                        <path
                            fill="none"
                            stroke="#eee"
                            strokeWidth="5"
                            d="M50 2.5a47.5 47.5 0 110 95 47.5 47.5 0 110-95"
                        ></path>
                        <path
                            fill="none"
                            stroke="#555"
                            strokeDasharray="266.05px, 300px"
                            strokeDashoffset="14.925"
                            strokeWidth="5"
                            d="M50 2.5a47.5 47.5 0 110 95 47.5 47.5 0 110-95"
                        ></path>
                    </svg>
                    <div className="mt-3">Creativity</div>
                </motion.div>
            </div>
        </div>
    </motion.section>
   ) 
}

export default forwardRef(Skills);