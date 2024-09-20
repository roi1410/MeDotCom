import { Col, Row } from "react-bootstrap";
import { PiOpenAiLogoThin } from "react-icons/pi";
import {
  SiPostman,
  SiVisualstudiocode
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <PiOpenAiLogoThin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    
    </Row>
  );
}

export default Toolstack;
