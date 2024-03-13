import { FaFacebookF, FaInstagram, FaRegEnvelope, FaMobileScreen, FaLocationDot } from 'react-icons/fa6';
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Home = (props, ref) => {
    return (
        <motion.section
            id="home"
            variants={props.mainVariant}
            initial="hidden"
            animate={props.animateControl} 
            ref={ref}
            className="flex flex-col-reverse text-center justify-between container mx-auto lg:flex-row lg:text-left"
        >
            <div className="self-center">
                <motion.span 
                    variants={props.childVariant}
                    className="font-bold bg-green-400 rounded-tl-xl rounded-r-2xl px-10 py-2 text-sm"
                >
                        Hello I'm
                </motion.span>
                <motion.h2 
                    variants={props.childVariant}
                    className="text-5xl font-semibold mt-5"
                >
                        Dindo Jimenez
                </motion.h2>
                <motion.h4
                    variants={props.childVariant}
                    className="text-2xl mt-2"
                >
                        Web Designer / Aspiring Full-Stack Web Developer
                </motion.h4>
                <ul className="mt-5 flex flex-col gap-2">
                    <motion.li
                        variants={props.childVariant}
                    >
                        <i><FaRegEnvelope className="inline" /></i>
                        <span className="pl-4">jimenezshown@gmail.com</span>
                    </motion.li>
                    <motion.li
                        variants={props.childVariant}
                    >
                        <i><FaMobileScreen className="inline" /></i>
                        <span className="pl-4">+** *** *** ****</span>
                    </motion.li>
                    <motion.li
                        variants={props.childVariant}
                    >
                        <i><FaLocationDot className="inline"/></i>
                        <span className="pl-4">Cebu, City, Philippines</span>
                    </motion.li>
                </ul>
                <ul className="flex gap-11 mt-5 ml-0 justify-center lg:justify-start lg:ml-10">
                    <motion.li
                        variants={props.childVariant}
                    >
                        <a href="#"><i><FaFacebookF className="text-xl"/></i></a>
                    </motion.li>
                    <motion.li
                        variants={props.childVariant}
                    >
                        <a href="#"><i><FaInstagram className="text-xl"/></i></a>
                    </motion.li>
                </ul>
            </div>
            <div className="self-center">
                <motion.img
                    variants={props.childVariant}
                    src="./profile.png" alt="profile-pic" className="mx-auto w-9/12 lg:w-full border-gray-300 border-20" loading="lazy"
                />
            </div>
        </motion.section>
    )
};

export default forwardRef(Home);