import { useState, useRef, useEffect } from "react";
import "./css/main.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills"
import Experiences from "./pages/Experiences";
import Portfolio  from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { motion, useInView, useAnimation } from 'framer-motion';

function App() {

  const sref = useRef(null);
  const homeRef = useRef(null);
  const homeRef2 = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    let sections = document.querySelectorAll("section");
    
    window.onscroll = () => {
      sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        let desktopNav = document.querySelector('#menu a[href*=' + id + ']');
        let mobileNav = document.querySelector(`#mainNav a[href*=${id}]`);
        
        if(top >= offset && top < offset + height) {
              desktopNav.classList.add("active");
              mobileNav.classList.add("active");
        } else {
          desktopNav.classList.remove("active");
          mobileNav.classList.remove("active");
          console.log(id);
        }
      });
    }
  },[])

  const scrollToSection = (elementRef) => {
    // window.scrollTo({
    //   top:  elementRef.current.offsetTop -90,
    //   behavior: "smooth",
    // })
  }

  const mainVariant = {
    visible: { 
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    hidden: { 
        opacity: 0
    }
  }
  const childVariant = {
      hidden: {
          opacity: 0,
          y: 15
      },
      visible: {
          opacity: 1,
          y: 0
      }
  }

  const isInView = useInView(homeRef2, { once: true });
  const isInView2 = useInView(aboutRef, { once: true });
  const isInView3 = useInView(skillsRef, { once: true });
  const isInView4 = useInView(experienceRef, { once: true });
  const isInView5 = useInView(portfolioRef, { once: true });
  const isInView6 = useInView(contactRef, { once: true });
  const isInView7 = useInView(footerRef, { once: true });
  const animateControl = useAnimation();
  const animateControl2 = useAnimation();
  const animateControl3 = useAnimation();
  const animateControl4 = useAnimation();
  const animateControl5 = useAnimation();
  const animateControl6 = useAnimation();
  const animateControl7 = useAnimation();

  useEffect(() => {
    if(isInView) {
      animateControl.start("visible");
    }
    if(isInView2) {
      animateControl2.start("visible");
    }
    if(isInView3) { 
      animateControl3.start("visible");
    }
    if(isInView4) {
      animateControl4.start("visible");
    }
    if(isInView5) {
      animateControl5.start("visible");
    }
    if(isInView6) {
      animateControl6.start("visible");
    }
    if(isInView7) {
      animateControl7.start("visible");
    }
  }, [isInView, isInView2, isInView3, isInView4, isInView5, isInView6, isInView7])

  return (
    <>
        <video autoPlay muted loop id="bg-video">
        <source src="/src/assets/bg-video.mp4" type="video/mp4"/>
        </video>
      <Navbar
        ref={homeRef}
        scrollToSection={ (elemRef) => scrollToSection(elemRef) }
        activeNav={ (navItem) => handleActiveNav(navItem)}
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        skillsRef={skillsRef} 
        experienceRef={experienceRef} 
        portfolioRef={portfolioRef} 
        contactRef={contactRef} 
      />
      <Home
        ref={homeRef2}
        mainVariant={mainVariant} 
        childVariant={childVariant}
        animateControl={animateControl}
      />
      <About 
        ref={aboutRef}
        mainVariant={mainVariant} 
        childVariant={childVariant}
        animateControl={animateControl2}
      />
      <Skills 
        ref={skillsRef}
        mainVariant={mainVariant} 
        childVariant={childVariant}
        animateControl={animateControl3}
      />
      <Experiences
        ref={experienceRef}
        mainVariant={mainVariant} 
        childVariant={childVariant}
        animateControl={animateControl4}
      />
      <Portfolio
        ref={portfolioRef}
        mainVariant={mainVariant} 
        childVariant={childVariant}
        animateControl={animateControl5}
      />
      <Contact
        ref={contactRef}
        mainVariant={mainVariant} 
        childVariant={childVariant}
        animateControl={animateControl6}
      />
      <Footer
        ref={footerRef}
        mainVariant={mainVariant} 
        childVariant={childVariant}
        animateControl={animateControl7}
      />
    </>
  );
}

export default App;
