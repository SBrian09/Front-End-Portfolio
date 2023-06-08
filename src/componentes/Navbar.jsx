// components/Navbar.jsx

import Link from "next/link";
import { useTheme } from 'next-themes'

const Navbar = () => {

  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const colorTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/" style={{color:'white'}}>
          Portfolio Brian Sanchez
        </Link>
      </div>
      <Link className="cta-btn" href="/CV.pdf" >Descargar CV</Link>
      <div>
      <button className="cta-btn" onClick={toggleTheme}>Modo { colorTheme }</button>
      </div>
    </div>
    
  )
}

export default Navbar;