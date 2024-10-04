import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { MdConstruction } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" hidden={!props.hasGithub}>
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {props.isWIP && (
            <Button
            variant="primary"
            disabled={true}
            href={props.ghLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <MdConstruction /> &nbsp;
            {"Under Construction"} &nbsp;
            <MdConstruction /> 
          </Button>
        )}

        {props.isRestricted && (
            <Button
            variant="primary"
            disabled={false}
            href="mailto:m3tham@uwaterloo.ca?subject=ECE350%20RTOS%20Project%20Inquiry&body=Hi%20Michael!"
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CiMail /> &nbsp;
            {"Learn more"} &nbsp;
            <CiMail /> 
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;