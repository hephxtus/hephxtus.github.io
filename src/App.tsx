import React, { useCallback } from 'react';
import './App.css';
import "./css/styles.css"
import ScrollToTop from "./ScrollToTop";

// import { IonIcon } from "react-ion-icon";

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
          <li><a href="#work">Work</a></li>
        </ul>
        <button className="burger-menu" id="burger-menu">
          {/* <IonIcon className="bars" name="menu-outline"></IonIcon> */}
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
      <a href="https://www.nzx.com/" target="_blank" rel="noreferrer"> NZX</a> implementing automated testing and continuous
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
        <a href="https://www.python.org/" target="_blank" rel="noreferrer">
          <img
            src="icons/icons8-python.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </a>
        <a href="https:/www.redhat.com/" target="_blank" rel="noreferrer">
          <img
            src="icons/icons8-red-hat-96.png"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </a>
        <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer">
          <img
            src="icons/Scikit_learn_logo_small.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </a>
      </div>

      <div className="second-set animate__animated animate__pulse">
        <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
          <img
            src="icons/icons8-linux-96.png"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </a>
        <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
          <img
            src="icons/icons8-docker-96.png"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <img
            src="icons/icons8-git-96.png"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </a>
      </div>
    </div>
  </section>;
}

function Projects() {
  return <section className="projects" id="projects">
    <h2 className="projects-title">Some of my Recent Projects</h2>
    <div className="projects-container">
      <div className="project-container project-card">
        <a href="https://github.com/hephxtus/ga-community-detection-with-DEAP" target="_blank" rel="noreferrer" >

          <img
            src="images/Community_Detection.jpg"
            alt="Community"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Community Detection</h3>
          <p className="project-details">
            This was my thesis project in which I devised a novel approach to Community Detection in Social Networks with Evolutionary Computing using a hyprid heuristic based on centrality to speed up local search.
          </p>
        </a>

        <a href="reports/CD_in_SN_using_EC.pdf" target="_blank" rel="noreferrer"
          className="project-link">Check
          it Out</a>
      </div>
      <div className="project-container project-card">
        <a href="https://github.com/hephxtus/EDA-Data-Manipulation-and-Modelling-for-Machine-Learning" target="_blank" rel="noreferrer">
          <img
            src="images/Neural Network.webp"
            alt="EDA, Data Manipulation, and Machine Learning"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Exploratory Data Analysis and Manipulation</h3>
          <p className="project-details">
            The goal of this project was to gain experience with the data mining process and exploratory data analysis
            (EDA) techniques. This was my first experience with machine learning, and I used Classification and
            Regression models to predict the price of a house.
          </p>
        </a>
        <a href="https://github.com/hephxtus/EDA-Data-Manipulation-and-Modelling-for-Machine-Learning"
          target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
      </div>
      <div className="project-container project-card">
        <a href="reports/CNN_for_Image_Classification_of_Fruit.pdf" target="_blank" rel="noreferrer">
          <img
            src="images/fruit.png"
            alt="fruit classification"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Image Classification using Convolutional Neural Nets</h3>
          <p className="project-details">
            For this project I investigated using CNN against a standard Multi layered Neural Network to classify images of fruit. This involved Data preprocessing and augmentation, along with model selection, training, and hyperparamter tuning.
            I extended this project using transfer learning to achieve a high level of accuracy in the classification process.
          </p>
        </a>
        <a href="reports/CNN_for_Image_Classification_of_Fruit.pdf" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
      </div>
    </div>
    <div className="projects-container">
      <div className="project-container project-card">
        <a href="https://github.com/hephxtus/Evolutionary-Algorithms-for-Optimization-Computer-Vision-and-Machine-Learning" target="_blank" rel="noreferrer" >

          <img
            src="images/genetic_landscape.webp"
            alt="AI Generated Evolutionary Landscape"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Evolutionary Algorithms for Optimization, Computer Vision, and Machine Learning</h3>
          <p className="project-details">
          The overall goal of this project was to review and practise evolutionary computation technologies for optimization, computer vision and machine learning.</p>
        </a>

        <a href="reports/EA_for_Optimization_CV_and_ML.pdf" target="_blank" rel="noreferrer"
          className="project-link">Check it Out</a>
      </div>
      <div className="project-container project-card">
        <a href="https://github.com/hephxtus/Metasploit-Cybersecurity-project" target="_blank" rel="noreferrer">
          <img
            src="images/cyber-nuke.jpg"
            alt="Tactical Nuke"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Exploiting Windows 7 machines with Metasploit</h3>
          <p className="project-details">
            The Goal of the project was to gain remote access to a Windows 7 machine using scanning and exploitation techniques. I then used this to find all Windows machines on the network find associated vulnerabilities and exploits in the metasploit database. This is then used to perform RCE and allow the attacker to interact with each target machine with elevated priveledges.
          </p>
        </a>
        <a href="reports/Tactical_Nuke.pdf"
          target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
      </div>
      <div className="project-container project-card">
        <a href="reports/CNN_for_Image_Classification_of_Fruit.pdf" target="_blank" rel="noreferrer">
          <img
            src="images/biological robot.png"
            alt="Biological Computer"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Evolutionary Computing for Optimization Problems</h3>
          <p className="project-details">
            This project was my first venture into Evolutionary Computing. I used Genetic Algorithms and Genetic Programming to solve a number of optimization problems, as well as the ideas of Non-dominated sorting to solve a multi-objective optimization problem and Particle Swarm Optimization to solve a constrained optimization problem.
          </p>
        </a>
        <a href="reports/Evolutionary_Computing_for_Optimization_Problems.pdf" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
      </div>
    </div>
  </section >;
}

function Work() {
  return <section className="projects" id="work">
    <h2 className="projects-title">Recent Work Experience</h2>
    <div className="projects-container">
      <a href="https://qontro.com/" target="_blank" rel="noreferrer">
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
        </a>
        <a href="https://www.nzx.com/" target="_blank" rel="noreferrer">
      <div className="project-container project-card">
        <img
          src="images/NZX.png"
          alt="NZX"
          loading="lazy"
          className="project-pic"
        />
        <h3 className="project-title">NZX</h3>
        <p className="project-details">
          Over the last year, moving from an Intern role to a Part time role and currently in my capacity as a full time Software Engineer, I have worked on many different projects across their distributed systems, a few of these include:
          1. Development and Deployment of an Automated Testing Framework across their environments
          2. Upgrading and rearchitecting of many of their legacy systems
          3. Automated Deployment pipelines using Ansible and Github Actions.
        </p>
        <h4 className="project-title">Software Engineer</h4>
      </div>
        </a>
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
      <img src="icons/icons8-gmail.gif" alt="Mail" className="socicon" />
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
          loaded={particlesLoaded} options={particlesConfig as any} />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />

      <Socials />


      <ScrollToTop />
      {/*<Testimonials/>*/}
    </div>
  )
};
