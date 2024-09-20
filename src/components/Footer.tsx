import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Roi Revivo</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/roi1410"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}>
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:roi14102000@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}>
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/roi-revivo/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}>
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
