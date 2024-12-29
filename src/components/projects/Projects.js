import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tex from "../../assets/texwhite.svg";
import uw from "../../assets/uw.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Feel free to browse my past internships and projects I've worked on!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tex}
              isBlog={false}
              hasGithub={false}
              isWIP={true}
              title="Speech2TeX"
              description="A tool used for converting spoken equations into their LaTeX equivalent using OpenAI's Whisper for speech recognition and a fine-tuned Google FLAN model for Natural Language Processing."
              ghLink="https://github.com/MichaelATham/tex2speech"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uw}
              isBlog={false}
              hasGithub={true}
              isRestricted={false}
              title="Simple Real-Time Operating System"
              description="A university project that incorporates context switching, inter-process communication (IPC) via shared memory, and an Earliest Deadline First (EDF) scheduling algorithm. Optimized task management for real-time performance, ensuring precise scheduling and resource sharing in a time-constrained environment."
              ghLink="https://github.com/MichaelATham/ece350-lab"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uw}
              isBlog={false}
              hasGithub={true}
              isRestricted={false}
              title="VHDL Equation Compiler and Interpreter"
              description="Implemented a series of labs focused on building a compiler and interpreter for VHDL equations. Key features include a recursive descent parser for syntax recognition, the use of polymorphism for flexible design, hashing for efficient symbol management, desugaring for simplification, and elaboration for processing. The Visitor Pattern was applied to facilitate the translation of VHDL equations into functional Java code in a modular and maintainable manner."
              ghLink="https://github.com/MichaelATham/ece351-labs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uw}
              isBlog={false}
              hasGithub={true}
              isRestricted={false}
              title="Client-DNS Server and Webserver Simulation"
              description="Developed a Python-based simulation of the interaction between a client machine and a DNS server. The client can query the server’s records to retrieve the IP address associated with a given domain. Additionally, implemented a webserver that utilizes a TCP socket to listen for and handle incoming requests. The repository includes an example Postman collection to demonstrate and test functionality."
              ghLink="https://github.com/MichaelATham/ece358-labs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uw}
              isBlog={false}
              hasGithub={true}
              isRestricted={false}
              title="Baseball Hall of Fame Predictor"
              description="Built a Python-based prediction tool leveraging the Lahman Baseball Database (1871–2023) to forecast which players are likely to be nominated and inducted into the Baseball Hall of Fame. The project utilized SQL for feature selection and data cleansing, ensuring the input dataset was optimized for analysis. A decision tree classifier was employed, fine-tuned for a balance of accuracy and precision, achieving an 80% success rate in predicting Hall of Fame outcomes. This tool provides insights into candidate nomination and induction based on historical player data."
              ghLink="https://github.com/MichaelATham/ece356-labs"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;