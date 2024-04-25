// components/Footer.jsx

const Footer = () => {
    return (
      <>
        <hr/>
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} Portfolio Brian Sanchez
          </p>
          <div className="social_icons">
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
            <a
            href="https://www.behance.net/briansanchez33"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-behance"></i>
          </a>
          <a
            href="https://www.instagram.com/sbrian09/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;