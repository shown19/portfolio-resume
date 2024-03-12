import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';

export const Navbar = forwardRef((props, ref) => {
  const [menuBtnStatus, setMenuBtnStatus] = useState(false);  
  const [fixedNavStatus, setFixedNavStatus] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const toggleMenuBtn = () => {
    setMenuBtnStatus(!menuBtnStatus);
  }

  const setFixedNav = () => {

    if(window.scrollY >= 100) {
      setFixedNavStatus(true);
    } else {
      setFixedNavStatus(false);
    }
  }
  window.addEventListener("scroll", setFixedNav);

  const handleRef = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
  }

  return (
    <nav
      
      ref={ref}
      className={`${fixedNavStatus ? "sticky bg-gray-900":"static bg-transparent"} navigation  transition-colors duration-500 top-0 z-10`}
    >
      <div className="relative container mx-auto py-5">
        <div className="flex item-center justify-between">
          <div>
            <div className="font-bold text-3xl ml-5 md:ml-0">CioN</div>
          </div>
          <div id="mainNav" className="hidden space-x-6 font-bold self-center md:flex">
            <a href="#home" onClick={ (e)=> handleRef(e)} className="hover:text-green-400 active">Home</a>
            <a href="#about" className="hover:text-green-400">About</a>
            <a href="#skills" className="hover:text-green-400">Skills</a>
            <a href="#experiences" className="hover:text-green-400">Experiences</a>
            <a href="#portfolio" className="hover:text-green-400">Portfolio</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </div>
          <button onClick={ () => toggleMenuBtn() } id="menu-btn" className={`${menuBtnStatus ? 'open' : ''} block hamburger self-center mr-5 z-10 md:hidden focus:outline-none`}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div className="md:hidden">
          <div id="menu" className={`${menuBtnStatus ? 'flex': 'hidden'} absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-gray-800/95 rounded-lg -top-1 left-6 right-8 drop-shadow-md sm:self-center`}>
            <a href="#home" onClick={ (e)=> handleRef(e)} className="active">Home</a>
            <a href="#about" className="">About</a>
            <a href="#skills" className="">Skills</a>
            <a href="#experiences" className="">Experiences</a>
            <a href="#portfolio" className="">Portfolio</a>
            <a href="#contact" className="">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
});
