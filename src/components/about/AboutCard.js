import React from "react";
import Card from "react-bootstrap/Card";
import { RxHeart } from "react-icons/rx";
import { GiAchievement } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am currently in my third year studying <span className="blue">Computer Engineering</span> at the <span className="blue">University of Waterloo</span>.
            To date I have completed:
            <ul>
                <li className="about-activity">
                <GiAchievement /> <span className="blue">4</span> university-level work terms
                </li>
                <li className="about-activity">
                <GiAchievement /> <span className="blue">2</span> highschool-level co-ops
                </li>
                <li className="about-activity">
                <GiAchievement /> <span className="blue">100+</span> hours of relevant volunteering
                </li>
                <li className="about-activity">
                <GiAchievement /> <span className="blue">1</span> year of relevant part-time work
                </li>
            </ul>
            ... with more to come! ☺
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <RxHeart /> Seeing Friends/Family 🤝🏻
            </li>
            <li className="about-activity">
              <RxHeart /> Playing with my dog Kenzo 🐶
            </li>
            <li className="about-activity">
              <RxHeart /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <RxHeart /> Traveling ✈️
            </li>
            <li className="about-activity">
              <RxHeart /> Sports & Personal Fitness 🎾
            </li>
          </ul>

          <p className="white">
          "No matter how difficult the path may be, every journey starts with a single step." {" "}
          </p>
          <footer className="blockquote-footer">
            {/* Me! */}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;