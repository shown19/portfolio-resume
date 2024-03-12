import {forwardRef} from 'react';
import { motion } from 'framer-motion';

const Footer = (props, ref) => {
    const getYear = () => {
        const year = new Date().getFullYear();
        return year;
    }
    return (
        <motion.footer
            variants={props.mainVariant}
            initial="hidden"
            animate={props.animateControl}
            ref={ref}
            className="flex bg-gray-900 mx-auto mt-20">
            <motion.p 
                variants={props.childVariant}
                className="text-center text-lg w-full self-center py-2"
            >
                All right reserved Dindo Jimenez @ { getYear() }
            </motion.p>
        </motion.footer>
    )
}

export default forwardRef(Footer);