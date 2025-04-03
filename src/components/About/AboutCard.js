import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tejas Sonawane</span>.
            <br />I am a passionate{" "}
            <span className="purple">MERN, React Native, and Python</span>{" "}
            developer who loves building modern web and mobile applications.
            <br />I thrive on creating{" "}
            <span className="purple">
              scalable, high-performance solutions
            </span>{" "}
            and constantly explore new ways to improve my craft.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(8 168 142 / 96%)" }}>
            "Strive to build things that make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Tejas Sonawane</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
