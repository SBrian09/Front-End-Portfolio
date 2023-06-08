// pages/index.js

import Hero from '@/componentes/Hero';
import About from '@/componentes/About';
import Skills from '@/componentes/Skills';
import Projects from '@/componentes/Projects';
import Contact from '@/componentes/Contact';
import Navbar from '@/componentes/NavBar2';


import Head from 'next/head';

import { ThemeProvider } from 'next-themes';


const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio Brian Sanchez</title>
        <meta name="description" content="Portfolio brian sanchez" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <div>
      
      <Navbar />
      <ThemeProvider>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </ThemeProvider>
      </div>
    </>
  );
};

export default Home;
