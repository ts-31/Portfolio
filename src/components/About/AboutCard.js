import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Tejas Sonawane</span>, a full-stack
            developer focused on building reliable{" "}
            <span className="purple">web and backend systems</span>.
            <br />
            <br />I primarily work with the{" "}
            <span className="purple">MERN stack, Next.js</span>, and{" "}
            <span className="purple">React Native</span>, and use{" "}
            <span className="purple">Python & FastAPI</span> to build scalable
            backend services and APIs.
            <br />
            <br />
            In <span className="purple">
              Google Summer of Code (GSoC) 2025
            </span>{" "}
            with <span className="purple">OpenAFS</span>, I worked remotely on
            production open-source software — developing a GNOME Shell
            extension, shipping reviewed PRs, and collaborating with global
            mentors.
            <br />
            <br />I enjoy ownership-driven work, writing clean and maintainable
            code, and solving real-world problems in fast-moving engineering
            teams.
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
