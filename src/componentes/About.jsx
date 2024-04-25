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
          ¡Hola! Soy Brian Sánchez, un apasionado del diseño gráfico, vivo en General San Martin, Gran Buenos Aires (GBA), 
          Argentina. Aunque no tengo experiencia laboral formal, cuento con una sólida formación en diseño 
          gráfico y una amplia gama de habilidades técnicas.Me gradué de un curso de diseño gráfico donde 
          adquirí competencias en herramientas como Photoshop, Illustrator, After Effects, Premiere Pro, 
          Corel Draw y Figma. Además, tengo conocimientos en desarrollo web y diseño UX, lo que me permite 
          comprender la importancia de la funcionalidad y la experiencia del usuario en cada proyecto en el 
          que trabajo.Mi enfoque se centra en combinar la creatividad con un enfoque estratégico para encontrar 
          soluciones innovadoras y funcionales a los desafíos de diseño. Soy un aprendiz rápido y me mantengo 
          actualizado sobre las últimas tendencias y tecnologías en diseño gráfico y multimedia a través de videos,
           tutoriales y proyectos personales.Estoy buscando oportunidades para aplicar mis habilidades y 
           conocimientos en agencias de diseño, empresas de tecnología y startups en el GBA. Estoy comprometido 
           con el aprendizaje continuo y estoy emocionado por la oportunidad de contribuir al éxito de equipos 
           creativos y dinámicos.<br/>¡Espero tener la oportunidad de trabajar juntos y hacer una diferencia en el 
           mundo del diseño gráfico!
          </p>
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