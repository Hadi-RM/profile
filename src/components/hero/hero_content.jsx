import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HeroContent = () => {
  return (
    <Card
      style={{ width: "32rem" }}
      md={{ span: 4, offset: 4 }}
      style={{ backgroundColor: "transparent", border: "none" }}
      className="text-start"
    >
      <Card.Body>
        <Card.Title className="text-white fs-1 fw-bold mt-5 mb-3">
          {" "}
          Hadiseh Mozhdehi
        </Card.Title>
        <h3 className="card-title fs-1 lh-2 fw-bold mb-4">
          Frontend Web Developer
        </h3>
        <Card.Text className=" text-white fs-4">
          Frontend web developer focused on creating Html and Css, I am
          currently exploring Javascript at DCI..
        </Card.Text>
        <a
          href="#"
          className="btn border-0 fs-6 rounded-pill fw-medium mt-4 successtext positive2 p-3"
        >
          SEE MY CV
        </a>{" "}
      </Card.Body>
    </Card>
  );
};

export default HeroContent;
