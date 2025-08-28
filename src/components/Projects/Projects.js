import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import budgetBuddy from "../../Assets/Projects/budgetBuddy.png";
import gimp from "../../Assets/Projects/gimp.png";
import bitsOfCode from "../../Assets/Projects/clothe.png";
import matchMyResume from "../../Assets/Projects/matchmyresume.png";
import codeclippy from "../../Assets/Projects/codeclippy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetBuddy}
              isBlog={false}
              title="BudgetBuddy"
              description="Budget Buddy – A full-stack finance management app that helps users track expenses, set budgets, and analyze spending with interactive charts. Features secure authentication, budget categorization, and real-time insights for better financial control. 🚀"
              ghLink="https://github.com/ts-31/budgetBuddy"
              demoLink="https://budget-buddy-frontend-phi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ClotheRentalApp"
              description="Clothe Rental System – A platform connecting lenders and renters for seamless clothing rentals. Users can register, log in, browse listings, place orders, and chat with lenders in real time. Lenders can post outfits, while renters explore and rent with ease. 👗"
              ghLink="https://github.com/ts-31/Clothes-Rental-System"
              demoLink="https://clothes-rental-system.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gimp}
              isBlog={false}
              title="GIMP Extensions Website Generator"
              description="Multilingual static site generator for GIMP Extensions using Hugo. Parsed AppStream XML metadata into 70+ localized Markdown files, supporting multiple languages, screenshots, and CI/CD integration. Built for GSoC proposal ranking, showcasing automation, content pipelines, and multilingual UX. 🌐"
              ghLink="https://gitlab.gnome.org/Infrastructure/gimp-extensions-web/-/merge_requests/4"
              demoLink="https://gimp-extensions-web-a83ffe.pages.gitlab.gnome.org/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matchMyResume}
              isBlog={false}
              title="MatchMyResume"
              description="Chrome Extension + Node.js backend that helps users match their resume to job descriptions using Google Gemini API (free tier). Features AI-based suggestions, Google Sign-In via Clerk, secure token flow, PostgreSQL, and job scraping from LinkedIn and Internshala. 🧠📄"
              ghLink="https://github.com/ts-31/MatchMyResume"
              demoLink="https://github.com/ts-31/MatchMyResume"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeclippy}
              isBlog={false}
              title="CodeClippy - Copy Files Extension"
              description="A Visual Studio Code extension that lets you browse workspace files in a tree view with checkboxes, and copy selected file contents to clipboard. Features include file path headers, ignoring common folders (node_modules, .git), and a clean panel UI powered by VS Code Webview API. 📂📋"
              ghLink="https://github.com/ts-31/codeclippy" // replace with your repo link
              demoLink="https://marketplace.visualstudio.com/items?itemName=ts-31.codeclippy" // replace if published
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
