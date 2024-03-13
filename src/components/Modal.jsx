import { FaXmark, FaX } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const Modal = (props) => {
    useEffect(() => {
        const escapeDownHandler = event => {
            if(event.key === "Escape") {
                props.modalToggle(false);
            }
        }
        document.addEventListener('keydown', escapeDownHandler);
        
    },[])
    return(
        <div className="modal fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-20">
            <div className="modal-inner popup-animate flex flex-col bg-zinc-900 w-3/4 max-w-7xl">
                <button onClick={(e) => {props.modalToggle(false)}} className="self-end mt-3 mr-3 mb-5"><FaXmark className="text-3xl text-zinc-400 hover:text-zinc-100"/></button>
                    <div className="flex flex-wrap text-center overflow-auto">
                        <div className="w-full text-3xl font-semibold">{props.portfData.title}</div>
                        <div className="w-full p-5">
                            <img loading="lazy" className="mx-auto" src={`./portfolio-${props.categoryName}/portfolio-${props.categoryName}-img${props.index}.jpg`}></img> 
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Modal;