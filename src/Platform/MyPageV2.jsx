import React from "react";
// import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./mypagev2.scss";
import ecomImg from "../assets/ecom.png";
import kanbanImg from "../assets/kanban.png";
import indiaImg from "../assets/namasteIndia.png";
import recodeImg from "../assets/recode.png";
import hpaile from "../assets/AgileProjectManagement.png";
import FullStack from "../assets/bct_fullStack.png";
import HackathonJISTECK2k22 from "../assets/binaryBeast.png";
import pythonBct from "../assets/btc_python.png";
import Hackoodissa from "../assets/hacloodisa.png";
import cyberSuraksha from "../assets/microd=softtatastrive.png";
import dp from "../assets/myImage.jpg";
import paper1 from "../assets/reserchaperRecode.png";
import achiepaper1 from "../assets/AcceptancePaper1.png";
// import dp from "../assets/myImage.jpg";
// import dp from "../assets/myImage.jpg";



const languages = [
  { name: "JavaScript", percent: 85 },
  { name: "Python", percent: 75 },
  { name: "React js", percent: 80 },
  { name: "Node.js", percent: 70 },
];

const certifications = [
 {
    certifications: hpaile,
    description: "Agile Project Management",
    link: "https://www.example.com/agile-project-management"
 },
 {
    certifications: FullStack,
    description: "Full Stack Development",
    link: "https://www.example.com/full-stack-development"
 }, {
    certifications: HackathonJISTECK2k22,
    description: "Binary Beast Hackathon",
    link: "https://www.example.com/binary-beast-hackathon"
 }, {
    certifications: pythonBct,
    description: "Python Programming Basics",
    link: "https://www.example.com/python-programming-basics"
 }, {
    certifications: Hackoodissa,
    description: "Hackoodissa Hackathon",
    link: "https://www.example.com/hackoodissa-hackathon"
 }, {
    certifications: cyberSuraksha,
    description: "Cyber Suraksha - Microsoft Tata Strive",
    link: "https://www.example.com/cyber-suraksha"
 }
];

const Achievment = [
    {
       certifications: paper1,
       description: "Design and Implementation of an Interactive Coding Platform Using MERN Stack and Learning Tools",
       link: "https://www.doi.org/10.55041/ISJEM03496"
    },
    // {
    //    certifications: achiepaper1,
    //    description: "Design and Implementation of an Interactive Coding Platform Using MERN Stack and Learning Tools",
    //    link: "https://www.doi.org/10.55041/ISJEM03496"
    // },
   
   ];

const projects = [
    {project:ecomImg,
    description: "E-commerce Website",
    link: ""
}, {project:kanbanImg,
    description: "Kanban Board Application",
    link: "",
}, {
project: indiaImg,
    description: "Namaste India - Cultural Showcase",
    link: ""
}, {
project: recodeImg,
    description: "Recode - Code Editor Application",
    link: ""
}
];


export default function Portfolio() {
  return (
    <motion.div 
      className="portfolio-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 1. Basic Description */}
      <section className="intro-section">
        <motion.img
          src={dp}
          alt="Profile"
          className="profile-img"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        />
        <div>
          <h1 className="intro-name">Amitosh Kumar</h1>
          <p className="intro-summary">Motivated and hardworking college student pursuing a career as a MERN Stack Developer. Bringing a strong technical foundation in MongoDB, Express.js, React, and Node.js, along with a proactive attitude and excellent problem-solving skills. Experienced with social media platforms and office technology, committed to leveraging my skills to contribute effectively to a company’s success and growth. Eager to apply my passion for web development in a dynamic and collaborative work environment.</p>
          {/* <a
            href="/resume.pdf"
            download
            className="resume-button"
          >
            Download Resume
          </a> */}
          <button
                className="resume-button"
                // onClick={() => {
                //     const link = document.createElement('a');
                //     link.href = '/resume.pdf';
                //     link.download = 'resume.pdf';
                //     document.body.appendChild(link);
                //     link.click();
                //     document.body.removeChild(link);
                // }}
                onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://drive.google.com/file/d/1qhi6SZVE8gLur0PBCCtOnuAk6J1blJW7/view?usp=sharing';
                    link.target = '_blank'; // optional: opens in new tab
                    link.rel = 'noopener noreferrer';
                    link.download = 'resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  
                >
                Download Resume
                </button>

        </div>
      </section>

      {/* 2. Languages Known */}
      <section>
        <h2 className="section-heading">Languages Known</h2>
        <div className="language-grid">
          {languages.map((lang, index) => (
            <div key={index} className="language-item">
              <div className="circular-progress">
                <svg className="circle-svg">
                  <circle cx="40" cy="40" r="35" className="circle-bg" />
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    className="circle-bar"
                    strokeDasharray={220}
                    strokeDashoffset={220 - (220 * lang.percent) / 100}
                  />
                </svg>
                <div className="circle-text">{lang.percent}%</div>
              </div>
              <p className="language-label">{lang.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Work Experience */}
      <section>
        <h2 className="section-heading">Work Experience</h2>
        <ul className="experience-list">
          <li>
            <h3 className="job-title">Software Developer Intern - MittArv </h3>
            <p className="job-dates">Feb 2021 - Present</p>
            <p>
                • Developed and maintained responsive, component-based user interfaces using ReactJS, ensuring an optimal user experience across a variety of devices.<br />
                • Proactively identified and resolved critical software defects through rigorous debugging and code analysis, enhancing application stability.<br />
                • Implemented and integrated Redux for centralized state management, optimizing data flow and improving application performance, resulting in a more efficient and scalable architecture.<br />
                • Utilized Git for version control and collaborative development, ensuring efficient code management and team coordination.
            </p>

          </li>
          {/* <li>
            <h3 className="job-title">Web Developer Intern - Webify</h3>
            <p className="job-dates">Jun 2020 - Dec 2020</p>
            <p>Assisted in developing e-commerce websites using React and Next.js.</p>
          </li> */}
        </ul>
      </section>

      {/* 4. Certification Carousel */}
      <section>
        <h2 className="section-heading">Certifications</h2>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {certifications.map((src, index) => (
            <div key={index}>
              <img className="img_display" src={src.certifications} alt={`Certification ${index + 1}`} />
                <p className="certification-description">{src.description}</p>
                <button
                        className="certification-button"
                        onClick={() => window.open(src.link, "_blank", "noopener,noreferrer")}
                        disabled={!src.link}
                        >
                        View Certificate
                        </button>


                {/* <a href={src.link} className="certification-link" target="_blank" rel="noopener noreferrer">View Certificate</a> */}
            </div>
          ))}
        </Carousel>
      </section>
      <section>
        <h2 className="section-heading">Achievements </h2>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {Achievment.map((src, index) => (
            <div key={index}>
              <img className="img_display" src={src.certifications} alt={`Certification ${index + 1}`} />
                <p className="certification-description">{src.description}</p>
                <button
                        className="certification-button"
                        onClick={() => window.open(src.link, "_blank", "noopener,noreferrer")}
                        disabled={!src.link}
                        >
                        View Certificate
                        </button>


                {/* <a href={src.link} className="certification-link" target="_blank" rel="noopener noreferrer">View Certificate</a> */}
            </div>
          ))}
        </Carousel>
      </section>
      {/* 5. Project Carousel */}
      <section>
        <h2 className="section-heading">Projects</h2>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {projects.map((src, index) => (
            <div key={index}>
              <img className="img_display" src={src.project} alt={`Project ${index + 1}`} />
                <p className="project-description">{src.description}</p>
                {/* <a href={src.link} className="project-link" target="_blank" rel="noopener noreferrer">Visit</a> */}
                            <button
            className="project-button"
            onClick={() => window.open(src.link, "_blank", "noopener,noreferrer")}
            >
            Take A Look !
            </button>


            </div>
          ))}
        </Carousel>
      </section>

      {/* 6. Contact Me */}
      <section>
        <h2 className="section-heading">Contact Me</h2>
        <div className="contact-links">
                        <motion.button
                className="contact-button"
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('mailto:amitoshroy2002@gmail.com')}
                >
                📧 amitoshroy2002@gmail.com
                </motion.button>

                <motion.button
                className="contact-button"
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('https://github.com/amitosh2002/', '_blank', 'noopener,noreferrer')}
                >
                💻 github.com/amitosh2002
                </motion.button>

        </div>
      </section>
    </motion.div>
  );
}
