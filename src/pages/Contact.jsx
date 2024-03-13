import { FaLocationArrow, FaRegEnvelope, FaMobileScreen } from 'react-icons/fa6';
import { forwardRef, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { motion } from 'framer-motion';

const Contact = (props, ref) => {

    const form = useRef();

    const [sendStatus, setSendStatus] = useState(false);
    const [sendStatusMessage, setSendStatusMessage] = useState("")

    const sendEmail = () => {
        const serviceID = import.meta.env.VITE_SENDEMAIL_SERVICE_ID !== undefined ? import.meta.env.VITE_SENDEMAIL_SERVICE_ID : "service_v2ymgkl";
        const templateID = import.meta.env.VITE_SENDEMAIL_TEMPLATE_ID !== undefined ? import.meta.env.VITE_SENDEMAIL_TEMPLATE_ID : "template_t1vhf47";
        const publicKey = import.meta.env.VITE_SENDEMAIL_PUBLIC_KEY !== undefined ? import.meta.env.VITE_SENDEMAIL_PUBLIC_KEY : "uWPCLHbmOFdemyncZ";
        console.log( serviceID + " " + templateID + " " + publicKey);

        emailjs.sendForm(
            serviceID,
            templateID,
            form.current,
            publicKey)
            .then((result) => {
                setSendStatus(true);
                setSendStatusMessage("Message sent successfully");
                console.log(result.text);
            }, (error) => {
                setSendStatus(false);
                setSendStatusMessage("Failed to send message");
                console.log(error.text);
            });
    };

    let name_regx = `[a-zA-Z]+`;
    const validationSchema = Yup.object({
        firstName: Yup.string().required("must not be empty").matches(name_regx, "alphabets only"),
        lastName: Yup.string().required("must not be empty").matches(name_regx, "alphabets only"),
        email: Yup.string().email("Invalid email address format").required("must not be empty"),
        messages: Yup.string().min(5, "Minimum of 10 characters").required("must not be empty"),
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        }
    });
    

    return (
        <motion.section
            id="contact"
            variants={props.mainVariant}
            initial="hidden"
            animate={props.animateControl}
            ref={ref}
            className="flex flex-col container mx-auto lg:pb-60"
        >
            <motion.h2
                variants={props.childVariant}
                className="font-bold text-3xl text-center w-full"
            >
                Contact Me
            </motion.h2>
            <div className="flex mt-40 flex-col lg:flex-row">
                <div className="m-auto w-full lg:w-2/4">
                    <motion.div
                        variants={props.childVariant}
                        className="flex rounded-lg bg-gray-700 shadow-xl flex-wrap w-4/5 mx-auto p-5"
                    >
                        <i className="pt-8 border-green-400 border-2 border-round mx-auto xl:mx-0"><FaLocationArrow className="ml-auto mr-auto text-3xl"/> </i>
                        <div className="pl-0 self-center text-center mt-2 xl:pl-20 w-full xl:w-auto xl:text-left xl:mt-0">
                            <h4 className="font-semibold text-2xl">Address</h4>
                            <p className="text-lg">Guadalupe, Cebu City, <br></br>Philippines, 6000</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={props.childVariant}
                        className="flex rounded-lg bg-gray-700 shadow-xl mt-10 flex-wrap w-4/5 mx-auto p-5"
                    >
                        <i className="pt-8 border-green-400 border-2 border-round mx-auto xl:mx-0"><FaRegEnvelope className="ml-auto mr-auto text-3xl"/> </i>
                        <div className="pl-0 self-center text-center mt-2 xl:pl-20 w-full xl:w-auto xl:text-left xl:mt-0">
                            <h4 className="font-semibold text-2xl">Email</h4>
                            <p className=" text-lg ">jimenezshown@gmail.com</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={props.childVariant}
                        className="flex rounded-lg bg-gray-700 shadow-xl mt-10 flex-wrap w-4/5 mx-auto p-5"
                    >
                        <i className="pt-8 border-green-400 border-2 border-round mx-auto xl:mx-0"><FaMobileScreen className="ml-auto mr-auto text-3xl"/></i>
                        <div className="pl-0 self-center text-center mt-2 xl:pl-20 w-full xl:w-auto xl:text-left xl:mt-0">
                            <h4 className="font-semibold text-2xl">Phone</h4>
                            <p className=" text-lg">(+63) 918-648-6094</p>
                        </div>
                    </motion.div>
                </div>
                <form ref={form} onSubmit={handleSubmit(sendEmail)} className="flex flex-col gap-5 p-14 w-full lg:w-2/4">
                    <motion.input variants={props.childVariant} {...register("firstName")} placeholder="First Name" className="uppercase h-13 rounded p-4 bg-transparent border-white border-2 text-white"></motion.input>
                    <label className="text-red-500 -mt-3">{errors.firstName?.message}</label>
                    <motion.input variants={props.childVariant} {...register("lastName")} placeholder="Last Name" className="uppercase h-13 rounded p-4 bg-transparent border-white border-2 text-white"></motion.input>
                    <label className="text-red-500 -mt-3"><span>{errors.lastName?.message}</span></label>
                    <motion.input variants={props.childVariant} {...register("email")} placeholder="Your Email" className="h-13 rounded p-4 bg-transparent border-white border-2 text-white"></motion.input>
                    <label className="text-red-500 -mt-3">{errors.email?.message}</label>
                    <motion.textarea variants={props.childVariant} {...register("messages")} placeholder="Your Message" className="h-2/6 rounded p-4 bg-transparent border-white border-2 text-white"></motion.textarea>
                    <label className="text-red-500 -mt-3">{errors.messages?.message}</label>
                    <motion.button variants={props.childVariant}  type="submit" className="font-bold bg-green-400 rounded-xl p-3 text-xl hover:bg-green-600">Send Message</motion.button>
                    <label className={`${sendStatus ? 'text-green-400' : 'text-red-500'} text-center font-semibold`}>{ sendStatusMessage !== "" ? sendStatusMessage : "" }</label>
                </form>
            </div>
        </motion.section>
    )
}

export default forwardRef(Contact);