// components/Contact.jsx
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {

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
      <motion.div className="contact-container" id="Contact"
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible": "hidden"}
        transition={sectionTransition}>
        <h2>Contactame</h2>
        <p>Si quieres darme una oportunidad, conoces de alguna oferta de trabajo o quieres darme una entrevista, mi bandeja de entrada siempre está abierta. Te lo agradecere mucho <strong>¡¡Gracias desde ahora por leer mi Portfolio!!</strong><span className='mano'>👋</span></p>
        <a href="mailto:sanchezbrian199709@gmail.com" className='cta-btn'>Mandame un Mail</a>
      </motion.div>
    )
  }
  
  export default Contact;