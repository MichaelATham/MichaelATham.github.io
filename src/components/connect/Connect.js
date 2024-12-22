import React from "react";
import Particle from "../Particle";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import GitHubCalendar from 'react-github-calendar';

const minimalTheme = {
  light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
  // for `dark` the default theme will be used
};


function Connect() {
  return (
    <Container fluid className="connect-section" id="connect">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="connect-social">
            <h1>
              <span className="blue">CONNECT </span>WITH ME!
            </h1>
            <ul className="connect-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/m3tham/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  connect-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/michaeltthm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour connect-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:m3tham@uwaterloo.ca"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  connect-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/michaelatham"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  connect-social-icons"
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
export default Connect;
