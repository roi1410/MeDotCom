import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import triple from "../../Assets/Projects/Triple.png";
import npm from "../../Assets/Projects/Npm.png";
import PDFform from "../../Assets/Projects/PDFform.png";
import ProjectCards from "./ProjectCards";

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
            <ProjectCards
              imgPath={PDFform}
              title="CV Creator"
              description={[
                "CV Creator: Developed a web application for creating CVs with live updates based on user input.",
                <br />,
                "•	Technologies: Node.js, Express, JWT, MongoDB, React, React-Router-Dom, React-Hook-Forms, PDF-Render, Tailwind CSS.",
                <br />,
                "•	Faced the challenge of rendering PDF with on change update smoothly and handling complex forms at the same screen.",
                <br />,
                "•	Overcame the challenge by leveraging React Hook Forms and implementing debounce value to improve performance.",
              ]}
              gitLink="https://github.com/roi1410/CVproject.git"
              isDemo={false}
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={triple}
              title="Bits-0f-C0de"
              description={[
                "Trip Planner  is a full-stack web application that helps users find flights, hotels, and attractions at their travel destination.",
                <br />,

                "•	Technologies: node.js, express, JWT, and SQL with sequelize ORM, react.js, Axios.",
                <br />,
                "•	Developed a full-stack web application using node.js serving a REST API with React as the frontend.",
                <br />,
                " •	Implemented JWT to manage the session and security.",
                <br />,
                "•	use external API that provides data by coordinates query about the destination Hotels or attraction.",
                <br />,
                "  •	design SQL relation DB that has FK logic to call the data effectively",
              ]}
              gitLink="https://github.com/OmerShuvami/tripel"
              demoLink=""
              isDemo={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={npm}
              title="React Component Library"
              description="A collection of custom React hooks, components, and utilities to help streamline development in your React projects."
              gitLink="https://github.com/roi1410/component-library.git"
              demoLink="https://editor.soumya-jit.tech/"
              isDemo={false}
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
