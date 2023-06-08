// components/Hero.jsx
import Typewriter from '../componentes/Typewriter';
import Image from "next/image";
import fondo1 from "../imagen/fondo1.svg";
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  
  const [ref, inView] = useInView({
    threshold:0.5,
    triggerOnce:true,
  });
  const sectionVariants = {
    hidden:{opacity: 0, y: 50},
    visible:{opacity: 1, y: 0 },
  }
  const sectionTransition = {
    duration:0.5,
    ease:"easeInOut",
  };

  return (
    <motion.div  className="hero-container" id='Hero'
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible": "hidden"}
        transition={sectionTransition}>

      <Image src={fondo1} className="profile-img" width={400} height={400} alt="fondo de hero" />
      <div className='color-green'></div>
      <div className="hero-text">
        <h1>Hola, Me Llamo Brian <span className='mano'>👋</span></h1>
        <div>
        <Typewriter text="Yo soy un Desarrollador Front-End Jr de Buenos Aires, Argentina. Me especializo en construir y diseñar
          sitios web excepcionales." /> 
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/SBrian09?tab=repositories"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/brian-sanchez-151809216/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero;