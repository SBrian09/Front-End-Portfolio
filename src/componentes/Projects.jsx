// components/Projects.jsx

import { projectData } from './data.js';
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
    triggerOnce:true,
  });
  const sectionVariants = {
    hidden:{opacity: 0, x: -50},
    visible:{opacity: 1, x: 0 },
  }
  const sectionTransition = {
    duration:0.5,
    ease:"easeInOut",
  };

  return (
    <div className="projects-container" id='Projects'>
      <h2>Projects</h2>
      <motion.div className="projects-grid"
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible": "hidden"}
        transition={sectionTransition}>

        {projectData && projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <i className="fa-regular fa-folder-open folder-icon"></i>
              <div className="small-icons">
                <a href={project.gitHubLink} target="_blank"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
        }
    </motion.div>
    </div>
  )
}

export default Projects;