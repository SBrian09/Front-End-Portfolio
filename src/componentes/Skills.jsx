// components/Skills.jsx
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiTypescript } from "react-icons/si";


const Skills = () => {
  
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
      <motion.div className="skills-container" id="Skills"
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible": "hidden"}
        transition={sectionTransition}>
        <h2>Skills</h2>
        <div className="grid-skills">
          <div className="skill-card photoshop">
            <SiAdobephotoshop />
            <p>Photoshop</p>
          </div>
          <div className="skill-card illustrator">
            <SiAdobeillustrator />
            <p>Illustartor</p>
          </div>
          <div className="skill-card after">
            <SiAdobeaftereffects />
            <p>Afeter Effects</p>
          </div>
          <div className="skill-card premiere">
            <SiAdobepremierepro />
            <p>Premiere Pro</p>
          </div>
          <div className="skill-card html">
            <i className="fa-brands fa-html5 html-icon"></i>
            <p>HTML</p>
          </div>
          <div className="skill-card css">
            <i className="fa-brands fa-css3-alt css-icon"></i>
            <p>CSS</p>
          </div>
          <div className="skill-card js">
            <i className="fa-brands fa-js-square js-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
            <i className="fa-brands fa-react react-icon"></i>
            <p>React</p>
          </div>
          <div className="skill-card node">
            <i className="fa-brands fa-node-js node-icon"></i>
            <p>Node</p>
          </div>
          <div className="skill-card angular">
            <i className="fa-brands fa-angular angular-icon"></i>
            <p>Angular</p>
          </div>
          <div className="skill-card bootstrap">
            <i className="fa-brands fa-bootstrap bootstrap-icon"></i>
            <p>Bootstrap</p>
          </div>
          <div className="skill-card figma">
            <i className="fa-brands fa-figma figma-icon"></i>
            <p>Figma</p>
          </div>
          <div className="skill-card typescript">
            <SiTypescript />
            <p>Typescript</p>
          </div>
          <div className="skill-card adobeXD">
            <SiAdobexd />
            <p>Adobe XD</p>
          </div>
        </div>
      </motion.div>
    )
  }
  
  export default Skills;