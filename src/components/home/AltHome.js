import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from '../Particle';

function AltHome() {
  return (
    <Container fluid className="home-about-section" id="about">
        <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A QUICK <span className="blue"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
                Over 5 years of programming experience, fostering expertise in the evolving digital landscape.
              <br />
              <br />Proficient in a spectrum of languages including
                <b className="blue"> C, C++, C#, Java, </b>
              and
              <b className="blue"> JavaScript</b>
              , honed through both professional and academic experiences.
              <br />
              <br />
              My field of Interest's are in areas such as&nbsp;
                <b className="blue">Back-end Development, Cloud Computing </b> 
              and also in areas related to{" "}
                <b className="blue">
                  Cybersecurity, Artificial Intelligence.
                </b>
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="blue">CONNECT </span>WITH ME!</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/m3tham/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/michaeltthm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:m3tham@uwaterloo.ca"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/michaelatham"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default AltHome;
