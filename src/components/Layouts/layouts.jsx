import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomNav from "../header/CustomNav ";
import Brand from "../header/brand";
import HeroLogo from "../hero/hero_logo";
import HeroContent from "../hero/hero_content";
import MySkills from "../skills/myskills";
import SkillsImages from "../skills/skillsimages";
import vscode from "/home/dci-student/Desktop/REACT/profile/src/assets/vscode.png";
import html5 from "/home/dci-student/Desktop/REACT/profile/src/assets/html5.png";
import css3 from "/home/dci-student/Desktop/REACT/profile/src/assets/css.png";
import git from "/home/dci-student/Desktop/REACT/profile/src/assets/githab.png";
import react from "/home/dci-student/Desktop/REACT/profile/src/assets/react.png";
import typescript from "/home/dci-student/Desktop/REACT/profile/src/assets/typescript.png";
import javaScript from "/home/dci-student/Desktop/REACT/profile/src/assets/js.png";
import MyProjects from "../projects/myprojects";
import ProjectsImages from "../projects/projectsimages";
import myproject from "/home/dci-student/Desktop/REACT/profile/src/assets/myproject.png";
import ContactUsForm from "../contactus/contactform";
import ContactImage from "../contactus/contactimage";
import Footer from "../footer/footer";
import CopyRight from "../footer/copyright";

import "../skills/skills.css";
import "../projects/projects.css";
import "../header/header.css";

const Layouts = () => {
  const skills = [
    { id: 1, skillsName: "JavaScript", skillsImage: javaScript },
    { id: 2, skillsName: "React", skillsImage: react },
    { id: 3, skillsName: "Typescript", skillsImage: typescript },
    { id: 4, skillsName: "HTML5", skillsImage: html5 },
    { id: 5, skillsName: "CSS3", skillsImage: css3 },
    { id: 6, skillsName: "Git / GitHub", skillsImage: git },
    { id: 7, skillsName: "VS Code", skillsImage: vscode },
  ];

  const projects = [
    {
      id: 1,
      projectsName: "My Portfolio",
      projectsImage: myproject,
      projectDescription:
        "website showcases my skills, experience, and projects in a clean, professional layout, highlighting my expertise in myr field. ",
    },
  ];
  return (
    <Container fluid>
      <Row className="sticky-top myheader" id="home">
        <Col style={{ marginLeft: 250 }} className="d-flex ">
          <Brand />
        </Col>
        <Col className="d-flex justify-content-center">
          <CustomNav />
        </Col>
      </Row>

      <Row className="success2">
        <Col
          style={{ marginLeft: 250 }}
          className="d-flex justify-content-center mt-5"
        >
          <HeroContent />
        </Col>
        <Col className=" d-flex justify-content-center mt-5">
          <HeroLogo />
        </Col>
      </Row>

      <Row className="positive2" id="skills">
        <Col>
          <MySkills />
        </Col>

        <Row className="d-flex flex-row justify-content-center">
          <Col className="d-flex justify-content-center">
            {skills.map((item) => (
              <SkillsImages {...item} />
            ))}
          </Col>
        </Row>
      </Row>

      <Row className="projects" id="projects">
        <Col>
          <MyProjects />
        </Col>
      </Row>

      <Row className="d-flex flex-row justify-content-center projects">
        <Col className="d-flex justify-content-center">
          {projects.map((item) => (
            <ProjectsImages {...item} />
          ))}
        </Col>
      </Row>

      <Row className="touch" id="contacts">
        <Col>
          <ContactImage />
        </Col>
        <Col>
          <ContactUsForm />
        </Col>
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
        <Col>
          <CopyRight />
        </Col>
      </Row>
    </Container>
  );
};

export default Layouts;
