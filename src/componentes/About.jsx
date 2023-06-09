// components/About.jsx

import Image from "next/image";
import imagen1 from "../imagen/Persona-programando.png"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {

    const [ref, inView] = useInView({
      threshold:0.5,
      triggerOnce:true,
    });
    const sectionVariants = {
      hidden:{opacity: 0, x: 50},
      visible:{opacity: 1, x: 0 },
    }
    const sectionTransition = {
      duration:0.5,
      ease:"easeInOut",
    };

  

  return (
    <div className="about-container" id="About">
      <h2>Acerca de mi</h2>
      
      <motion.div className="flex-about"
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible": "hidden"}
        transition={sectionTransition}
    >
        <div className="about-text">
          <p>
          Como desarrollador, siempre me ha apasionado crear soluciones elegantes y efectivas 
          para problemas complejos. Tengo una base sólida en el diseño y el desarrollo de software, 
          con un enfoque en tecnologías web como HTML, CSS y JavaScript. Me gusta trabajar tanto en 
          el front-end de las aplicaciones, y siempre estoy buscando formas de optimizar el rendimiento, 
          mejorar la experiencia del usuario y garantizar el más alto nivel de calidad del código.
          </p>
          <p>A lo largo de mi carrera(estudios), he trabajado en desarrollar algunos proyectos, 
            desde simples sitios web estáticos hasta web mas dinamicas y complejas de nivel 
            empresarial. Tengo experiencia trabajando con una variedad de herramientas 
            y marcos de desarrollo, incluidos React, Angular, Vue.js y Node.js. 
            Siempre estoy ansioso por aprender y explorar nuevas tecnologías, y estoy 
            constantemente buscando oportunidades para mejorar mis habilidades y 
            conocimientos.</p>
        </div>
        <div className="about-img">
          <Image src={imagen1} className="profile-img" width={300} height={500} alt="imagen-profile"/>
        </div>
        <div className="color-blue"></div>
        </motion.div>  
      
    </div>
  )
}

export default About;