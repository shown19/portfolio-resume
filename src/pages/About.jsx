import { FaDownload, FaCode } from 'react-icons/fa6';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const About = (props, ref) => {
    return (
        <>
            <motion.section
                id="about"
                variants={props.mainVariant}
                initial="hidden"
                animate={props.animateControl} 
                ref={ref}
                className="container flex mx-auto flex-col lg:flex-row"
            >
                <div className="self-center w-5/12 block">
                    <motion.img
                        variants={props.childVariant}
                        src="./about-img.png"
                        loading="lazy" alt="About Image"
                        className="w-full"
                    />
                </div>
                <div className="self-center">
                    <motion.h2
                        variants={props.childVariant}
                        className="font-bold text-3xl text-center lg:text-left">
                            About Me
                    </motion.h2>
                    <motion.p 
                        variants={props.childVariant}
                        className="mt-2 text-center lg:text-left">
                            Hello, I'm Dindo Jimenez, a web designer and an aspiring full-stack web developer based on Philippines. I have rich experience in web site design, building and customization. Also I am good at
                    </motion.p>
                    <ul className="flex flex-wrap gap-6 px-2 mt-5 justify-around lg:justify-start">
                        <motion.li variants={props.childVariant}> 
                            <span className="border-2 border-green-400">Javascript</span>     
                        </motion.li>
                        <motion.li variants={props.childVariant}>
                            <span className="border-2 border-green-400">React</span>        
                        </motion.li>
                        <motion.li variants={props.childVariant}>
                            <span className="border-2 border-green-400">Tailwind</span>
                        </motion.li>
                        <motion.li variants={props.childVariant}>
                            <span className="border-2 border-green-400">HTML</span>
                        </motion.li>
                        <motion.li variants={props.childVariant}>
                            <span className="border-2 border-green-400">CSS</span>
                        </motion.li>
                        <motion.li variants={props.childVariant}>
                            <span className="border-2 border-green-400">Node</span>
                        </motion.li>
                    </ul>
                    <motion.a 
                        variants={props.childVariant}
                        href="./cv/cv.docx"
                        download="cv.docx"
                        className="block bg-green-400 p-2 rounded-lg mt-5 w-4/5 text-center mx-auto lg:w-2/4 lg:inline-block">
                            Download CV <i><FaDownload className="inline" /></i>
                    </motion.a>
                </div>
            </motion.section>
        </>
    )
}

export default forwardRef(About);