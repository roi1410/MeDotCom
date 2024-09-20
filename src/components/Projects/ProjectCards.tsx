import { ReactNode } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
interface IProjectCardsProps {
  imgPath: string;
  description: ReactNode[] | string;
  title: string;
  gitLink: string;
  demoLink: string;
  isDemo: boolean;
}
function ProjectCards({
  imgPath,
  description,
  title,
  gitLink,
  demoLink,
  isDemo,
}: IProjectCardsProps) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button variant="primary" href={gitLink} target="_blank">
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>
        {"\n"}
        {"\n"}
        {isDemo && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
