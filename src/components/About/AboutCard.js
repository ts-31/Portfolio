import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="purple">Tejas Sonawane</span>, a
            passionate developer focused on building impactful{" "}
            <span className="purple">web and mobile applications</span>.
            <br />
            <br />
            I work primarily with the{" "}
            <span className="purple">MERN stack, React Native</span>, and{" "}
            <span className="purple">Next.js</span>. I’m also proficient in{" "}
            <span className="purple">Python and FastAPI</span> for building robust
            backend services.
            <br />
            <br />
            In 2025, I was selected as a contributor for{" "}
            <span className="purple">Google Summer of Code (GSoC)</span> with{" "}
            <span className="purple">OpenAFS</span>, where I developed a GNOME Shell
            extension and contributed to open-source tooling and documentation.
            <br />
            <br />
            I thrive on solving complex problems, writing clean and scalable code,
            and contributing to the global developer community.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Open Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning AI Agents & System Design
            </li>
          </ul>

          <p style={{ color: "rgb(8 168 142 / 96%)" }}>
            "Strive to build things that make an impact — not just features."
          </p>
          <footer className="blockquote-footer">Tejas Sonawane</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
