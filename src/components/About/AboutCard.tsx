import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Roi Revivo </span>
            from <span className="purple"> Israel.</span>
            <br />
            I am currently employed as a full stack dev at IDF Lotem BI Data.
            <br />
            I have completed a Full Stack boot camp  at CyberPro.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing  Guitar 
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Committed to building impactful solutions through dedication and hard work.".
          </p>
          <footer className="blockquote-footer">Chat GPT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
