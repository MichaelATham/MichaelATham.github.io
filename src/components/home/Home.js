import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AltHome from "./AltHome";
import TypeEffect from "./TypeEffect";

function Home() {
  useEffect(() => {
    const initialWidthMain = window.outerWidth;
    const initialHeightMain = window.outerHeight;
    const bottomOffset = initialHeightMain / 15;

    document.documentElement.style.setProperty('--initial-width', `${initialWidthMain}px`);
    document.documentElement.style.setProperty('--initial-height', `${initialHeightMain}px`);
    document.documentElement.style.setProperty('--bottom-offset', `${bottomOffset}px`);

    const initialWidthAlt = window.outerWidth;
    const initialHeightAlt = window.outerHeight;
    document.documentElement.style.setProperty('--initial-width-alt', `${initialWidthAlt}px`);
    document.documentElement.style.setProperty('--initial-height-alt', `${initialHeightAlt}px`);
  }, []);

  return (
    <section>
      <div className="home-section">
        <Particle />
        <Container fluid className="home-content" id="home">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There! {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏼
                </span>
              </h1>
              <h1 className="heading-name">
                I'M <strong className="main-name">MICHAEL THAM</strong>
              </h1>
              <div style={{ padding: 50, paddingTop: 25, textAlign: "left" }}>
                <TypeEffect />
              </div>
            </Col>
          </Row>
          <div className="scroll-down"></div>
        </Container>
      </div>
      <div className="alt-home-section">
        <Container>
          <AltHome />
        </Container>
      </div>
    </section>
  );
}

export default Home;