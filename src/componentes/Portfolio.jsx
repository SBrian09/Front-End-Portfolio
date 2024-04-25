import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Portfolio = () => {

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
    const projects = [
        {
          image: require ('../imagen/portfolio1.gif'),
          title: 'Proyecto 1',
          description: 'Descripción del Proyecto 1',
          title: 'imagen-portfolio-1'
        },
        {
          image: require ('../imagen/portfolio2.gif'),
          title: 'imagen-portfolio-2'
        },
        {
            image: require ('../imagen/portfolio3.gif'),
            title: 'imagen-portfolio-3'
        },
        {
            image: require ('../imagen/portfolio4.png'),
            title: 'imagen-portfolio-4'
        },
        {
            image: require ('../imagen/portfolio5.gif'),
            title: 'imagen-portfolio-5'
        },
        {
            image: require ('../imagen/portfolio6.png'),
            title: 'imagen-portfolio-6'
        },
        {
            image: require ('../imagen/portfolio7.png'),
            title: 'imagen-portfolio-7'
        },
        {
            image: require ('../imagen/portfolio8.png'),
            title: 'imagen-portfolio-8'
        },
        {
            image: require ('../imagen/portfolio9.png'),
            title: 'imagen-portfolio-9'
        },
        {
            image: require ('../imagen/portfolio10.gif'),
            title: 'imagen-portfolio-10'
        },
        {
            image: require ('../imagen/portfolio11.png'),
            title: 'imagen-portfolio-11'
        },
        {
            image: require ('../imagen/portfolio12.png'),
            title: 'imagen-portfolio-12'
        },
        {
            image: require ('../imagen/portfolio13.png'),
            title: 'imagen-portfolio-13'
        },
        {
            image: require ('../imagen/portfolio14.png'),
            title: 'imagen-portfolio-14'
        },
        {
            image: require ('../imagen/portfolio15.png'),
            title: 'imagen-portfolio-15'
        },
        {
            image: require ('../imagen/portfolio16.png'),
            title: 'imagen-portfolio-16'
        },
        {
            image: require ('../imagen/portfolio17.png'),
            title: 'imagen-portfolio-17'
        },
        {
            image: require ('../imagen/portfolio18.png'),
            title: 'imagen-portfolio-18'
        },
        {
            image: require ('../imagen/portfolio19.png'),
            title: 'imagen-portfolio-19'
        },
        // Agrega más proyectos según sea necesario
      ];

  

  return (
    <div className="portfolio-container" id="Portfolio">
        <h2>Portfolio</h2>
      
        <motion.div className="flex-portfolio" id="portfolio"
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible": "hidden"}
        transition={sectionTransition}
        >
        <div className="portfolio-grid">
            {projects.map((project, index) => (
                <div key={index} className="portfolio-item">
                <Image src={project.image} alt={project.title} className="profile-img" width={900} height={500} />
                </div>
            ))}
        </div>
        </motion.div>
    </div>
  )
}

export default Portfolio;