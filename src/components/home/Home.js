import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AltHome from "./AltHome";
import TypeEffect from "./TypeEffect";

function Home() {
  useEffect(() => {
    const initialWidth = window.outerWidth;
    const initialHeight = window.outerHeight;
    const bottomOffset = initialHeight / 15;

    document.documentElement.style.setProperty('--initial-width', `${initialWidth}px`);
    document.documentElement.style.setProperty('--initial-height', `${initialHeight}px`);
    document.documentElement.style.setProperty('--bottom-offset', `${bottomOffset}px`);
  }, []);

  const [showAltHome, setShowAltHome] = useState(false);

  useEffect(() => {
    // Set a timeout to load AltHome after Home has rendered
    const timer = setTimeout(() => {
      setShowAltHome(true);
    }, 1000); // Adjust the timeout duration as needed (2000ms = 2 seconds)

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There! {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏼
                </span>
              </h1>

              <h1 className="heading-name"> I'M <strong className="main-name"> MICHAEL THAM</strong>
              </h1>

              <div style={{ padding: 50, paddingTop: 25, textAlign: "left" }}>
                <TypeEffect />
              </div>
            </Col>
          </Row>
        </Container>
        <div class="scroll-down"></div>
      </Container>
      <section>
        <Container>
          {showAltHome && <AltHome />}
        </Container>
      </section>
    </section>
    
  );
}

export default Home;
