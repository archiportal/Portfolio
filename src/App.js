import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import {useMediaQuery} from './hooks';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  const isRowBased = useMediaQuery('(min-width: 1024px)');
  const styles = {
    container: isRowBased => ({
      height: isRowBased?'42rem':''
    })
  }

  return (
    <div>
    <NavBar />
    <Intro />
    <Bio />
    <div data-aos='fade-left' className="flex lg:flex-row flex-col gap-4 m-6 justify-center items-center" style={styles.container(isRowBased)}>
    <AboutMe />
    <Skills />
    </div>
    <Projects />
   </div>
  );
}

export default App;
