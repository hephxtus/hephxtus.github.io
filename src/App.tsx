import React, {useCallback} from 'react';
import './App.css';
import "./css/styles.css"
import ScrollToTop from "./ScrollToTop";

import Particles from 'react-particles';
import particlesConfig from './config/configParticles.json';
import { loadFull } from "tsparticles";

function Navbar() {
  return <>
    <nav className="navbar">
      <div className="navbar__logo">
        <h1><a href="index.html">Joseph Hodges</a></h1>
        <h4> Software Engineer</h4>
      </div>
      <div className="navbar__menu">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#work">Work</a></li>
        </ul>
        <button className="burger-menu" id="burger-menu">
          {/*<ion-icon className="bars" name="menu-outline"></ion-icon>*/}
        </button>
      </div>
    </nav>
  </>;
}

function Hero() {
  return <section className="hero" id="about">
    <img
        src="images/nerd-svgrepo-com.svg"
        alt="joseph-hodges"
        loading="lazy"
        className="hero-img"
    />
    <div className="bio animate__animated animate__shakeX">
      <h2 className="bio-title">About Me</h2>
      <p className="bio-text">
        Software Engineer experienced at all stages of the software development lifecycle.
      </p>
    </div>
  </section>;
}

function About() {
  return <section className="more-about">
    <h2>More About Me</h2>
    <p>
      I aim to create software that is easy to use, efficient, and
      maintainable. I am passionate about learning new technologies and
      applying them to real world problems.
    </p>
    <p>
      Born in Scotland and raised in New Zealand, I moved to Wellington to study Software Engineering at Victoria
      University of Wellington, specializing in Artificial Intelligence and Machine Learning.
      I graduated in 2022 with a Bachelor of Engineering with Honours, first class. I am currently working as a
      Software Engineer at
      <a href="https://www.nzx.com/" target="_blank" rel="noreferrer">NZX</a> implementing automated testing and continuous
      integration, as well as re-architecting many of the company's legacy systems.
    </p>
    <p>
      While recently graduated, I am far from finished learning. I am currently studying for my AWS Certified
      Solutions Architect Associate certification, and am looking to further my knowledge in DevOps and Machine
      Learning.
      I am also working on publishing my paper on the use of Evolutionary Machine Learning in the field of Community
      Detection.
    </p>

  </section>;
}

function Skills() {
  return <section className="skills" id="skills">
    <h2 className="skill-header">My Top Skills</h2>

    <div className="skills-wrapper">
      <div className="first-set animate__animated animate__pulse">
        <img
            src="icons/icons8-python.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
        />
        <img
            src="icons/icons8-red-hat-96.png"
            alt=""
            loading="lazy"
            className="icon icon-card"
        />
        <img
            src="icons/Scikit_learn_logo_small.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
        />
      </div>

      <div className="second-set animate__animated animate__pulse">
        <img
            src="icons/icons8-linux-96.png"
            alt=""
            loading="lazy"
            className="icon icon-card"
        />
        <img
            src="icons/icons8-docker-96.png"
            alt=""
            loading="lazy"
            className="icon icon-card"
        />
        <img
            src="icons/icons8-git-96.png"
            alt=""
            loading="lazy"
            className="icon icon-card"
        />
      </div>
    </div>
  </section>;
}

function Projects() {
  return <section className="projects" id="projects">
    <h2 className="projects-title">Some of my Recent Projects</h2>
    <div className="projects-container">
      <div className="project-container project-card">
        <img
            src="images/Community_Detection.jpg"
            alt="expense-tracker"
            loading="lazy"
            className="project-pic"
        />
        <h3 className="project-title">Community Detection</h3>
        <p className="project-details">
          Community Detection in Social Networks using Genetic Algorithms
        </p>
        <a href="reports/joe_489_proj-1.pdf" target="_blank" rel="noreferrer"
           download="Community Detection in Social Networks using Genetic Algorithms" className="project-link">Check
          it Out</a>
      </div>
      <div className="project-container project-card">
        <img
            src="images/Neural Network.webp"
            alt="EDA, Data Manipulation, and Machine Learning"
            loading="lazy"
            className="project-pic"
        />
        <h3 className="project-title">EDA, Data Manipulation, and Machine Learning</h3>
        <p className="project-details">
          The goal of this project was to gain experience with the data mining process and exploratory data analysis
          (EDA) techniques. This was my first experience with machine learning, and I used Classification and
          Regression models to predict the price of a house.
        </p>
        <a href="https://github.com/hephxtus/EDA-Data-Manipulation-and-Modelling-for-Machine-Learning"
           target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
      </div>
      <div className="project-container project-card">
        <img
            src="images/Computer_Vision.jpg"
            alt="greeny-earth"
            loading="lazy"
            className="project-pic"
        />
        <h3 className="project-title">Computer Vision</h3>
        <p className="project-details">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          ratione vel inventore labore commodi modi quos culpa aut saepe!
          Alias!
        </p>
        <a href="ps://github.com/hephxtus/EDA-Data-Manipulation-and-Modelling-for-Machine-Learning" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
      </div>
    </div>
  </section>;
}

function Work() {
  return <section className="projects" id="work">
    <h2 className="projects-title">Recent Work Experience</h2>
    <div className="projects-container">
      <div className="project-container project-card">
        <img
            src="images/qontro.jpg"
            alt="QONTRO"
            loading="lazy"
            className="project-pic"
        />
        <h3 className="project-title">Qontro</h3>
        <p className="project-details">
          Built a custom help desk solution and wrote a custom API to integrate with the help desk solution.
        </p>
        <h4 className="project-title">Junior Software Developer</h4>
      </div>
      <div className="project-container project-card">
        <img
            src="images/NZX.png"
            alt="NZX"
            loading="lazy"
            className="project-pic"
        />
        <h3 className="project-title">NZX</h3>
        <p className="project-details">
          The goal of this project was to gain experience with the data mining process and exploratory data analysis
          (EDA) techniques. This was my first experience with machine learning, and I used Classification and
          Regression models to predict the price of a house.
        </p>
        <h4 className="project-title">Software Engineer</h4>
      </div>
    </div>
  </section>;
}

// function Testimonials() {
//   return null;
// }

function Socials() {
  return <div className="socials">
    <a href="https://www.linkedin.com/in/joe-hodges" target="_blank" rel="noreferrer"
    ><img
        src="icons/icons8-linkedin-circled.gif"
        alt="Linkedin"
        loading="lazy"
        className="socicon"
    /></a>
    <a href="https://github.com/hephxtus" target="_blank" rel="noreferrer"
    ><img src="icons/icons8-github.gif" alt="Github" className="socicon"
    /></a>

    <a href="mailto:joe.hodges2000@gmail.com" target="_blank" rel="noreferrer">
      <img src="icons/icons8-gmail.gif" alt="Mail" className="socicon"/>
    </a>

  </div>;


}

export default function App() {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute', zIndex: -1 }}>
        <Particles height="100vh" width="100vw"
                   init={particlesInit}
                   loaded={particlesLoaded} options={particlesConfig as any}  />
      </div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Work/>

      <Socials/>


      <ScrollToTop/>
      {/*<Testimonials/>*/}
    </div>
  )
};
