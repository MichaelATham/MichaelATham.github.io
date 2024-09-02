import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiIntellijidea,
  SiMacos,
  SiDatadog,
  SiFossa,
  SiAzuredevops,
  SiTekton,
  SiCucumber,
  SiSpringboot,
  SiSonarqube,
} from "react-icons/si";

function Toolstack() {
  return (
    <div>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiMacos />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiIntellijidea />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDatadog />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFossa />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAzuredevops />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTekton />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCucumber />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSonarqube />
            </Col>
        </Row>
    </div>
  );
}

export default Toolstack;