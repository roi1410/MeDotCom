import { Col, Row } from "react-bootstrap";
import { AiOutlinePython } from "react-icons/ai";
import { DiDjango, DiGit, DiJavascript1, DiMongodb, DiNodejs, DiReact, DiSass } from "react-icons/di";
import { SiNestjs, SiPostgresql } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandTailwind,
  TbBrandTypescript
} from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <AiOutlinePython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java Script">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Django">
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} title="next.js" className="tech-icons">
        <TbBrandNextjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TypeScript">
        <TbBrandTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="react Native ">
        <TbBrandReactNative />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Nest.js">
        <SiNestjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SQL PostGres">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Scss">
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tailwind ">
        <TbBrandTailwind />
      </Col>
    </Row>
  );
}

export default Techstack;
