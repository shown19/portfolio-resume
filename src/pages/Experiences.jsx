import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Experiences = ( props, ref ) => {
    return (
        <motion.section
            id="experiences"
            variants={props.mainVariant}
            initial="hidden"
            animate={props.animateControl} 
            ref={ref}
            className="flex container m-auto flex-col lg:flex-row"
        >
            <div className="flex flex-col lg:w-2/4 ">
                <motion.h2
                    variants={props.childVariant}
                    className="font-bold text-3xl mb-10 text-center"
                >
                    Education
                </motion.h2>
                <motion.div
                    variants={props.childVariant}
                    className="rounded-lg bg-gray-700 w-3/4 ml-auto mr-auto shadow-xl p-5"
                >
                    <h4 className="font-bold text-2xl">University of Cebu - Main Campus</h4>
                    <h5 className="text-lg italic font-semibold mt-2">Bachelor of Science in Computer Engineering</h5>
                    <p className="text-green-400 text-lg mt-5">2010-2015</p>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="rounded-lg bg-gray-700 w-3/4 ml-auto mr-auto shadow-xl p-5 mt-10"
                >
                    <h4 className="font-bold text-2xl">Abellana National School, Cebu City</h4>
                    <h5 className="text-lg italic mt-2">Secondary</h5>
                    <p className="text-green-400 text-lg mt-5">2006-2010</p>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="rounded-lg bg-gray-700 w-3/4 ml-auto mr-auto shadow-xl p-5 mt-10"
                >
                    <h4 className="font-bold text-2xl">Guadalupe Elementary School, Cebu City</h4>
                    <h5 className="text-lg italic mt-2">Primary</h5>
                    <p className=" text-green-400 text-lg mt-5">2006-2010</p>
                </motion.div>
            </div>
            <div className="flex flex-col lg:w-2/4">
                <motion.h2 
                    variants={props.childVariant}
                    className="font-bold text-3xl mb-10 text-center mt-10 lg:mt-0"
                >
                    Work Experience
                </motion.h2>
                <motion.div
                    variants={props.childVariant}
                    className="rounded-lg bg-gray-700 w-3/4 m-auto shadow-xl p-5"
                >
                    <h4 className="font-bold text-2xl">Web Designer from <span className="text-green-400">Customer Benefits Services (CBS)</span> </h4>
                    <p className="text-lg text-green-400 mt-5">2015-2019</p>
                    <p className="mt-5">Responsibilities:</p>
                    <ul className="list-disc pl-5 mb-2">
                        <li>Designed template of the website using Adobe Photoshop and Adobe Illustrator.</li>
                        <li>Converted the template into a site using HTML, CSS and Javascript/Jquery.</li>
                        <li>Created various logos and banners for the products.</li>
                        <li>Additionaly added or removed some features in the website depends on the manager’s request.</li>
                        <li>Troubleshoot the website created and apply fixed when issues reported by the website tester.</li>
                        <li>Assisted in fixing some computer problems.</li>
                    </ul>
                </motion.div>
                <motion.div
                    variants={props.childVariant}
                    className="rounded-lg bg-gray-700 w-3/4 m-auto mt-0 shadow-xl p-5 mt-10"
                >
                    <h4 className="font-bold text-2xl">Web Developer (OJT) from <span className="text-green-400">National Conciliation and Mediation Board (NCMB)</span> </h4>
                    <p className="text-lg mt-5 text-green-400">2014-2014</p>
                    <p className="mt-5 mb-2">Responsibilities:</p>
                    <ul className="list-disc pl-5 mb-2">
                        <li>Assisted in creating their own site</li>
                        <li>Not related to position but also assisted in performing troubleshooting and fixing of company's computers.</li>
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default forwardRef(Experiences);