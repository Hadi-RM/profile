import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import githab from "/home/dci-student/Desktop/REACT/profile/src/assets/github-repo.gif";

const ProjectsImages = ({
  projectsName,
  projectsImage,
  projectDescription,
}) => {
  return (
    <Card style={{ width: "38rem" }} className="mb-5">
      <Card.Img variant="top" src={projectsImage} />
      <Card.Body>
        <Card.Title>{projectsName}</Card.Title>
        <Card.Text>{projectDescription}</Card.Text>
        <Card.Link href="#">
          <img src={githab} alt="" />
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProjectsImages;
