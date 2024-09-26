import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./contact.css";

const myStyle = {
  backgroundColor: "transparent",
  borderBottom: "2px solid #6474b4",
};

const lableStyle = {
  display: "block",
  textAlign: "left",
  padding: "10px 20px",
  borderRadius: "30px",
};

function ContactUsForm() {
  return (
    <div className="mb-5">
      <Form style={{ width: "30rem" }}>
        <span class="fs-1 fw-bold  mb-5 mt-5" style={lableStyle}>
          {" "}
          Get in Touch{" "}
        </span>

        <Form.Group className="mb-3 ">
          <Form.Label class="form-label mt-4" style={lableStyle}>
            Name
          </Form.Label>
          <Form.Control placeholder="Write your name here" style={myStyle} />

          <Form.Label class="form-label" style={lableStyle}>
            Email
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Let me know how to contact back"
            style={myStyle}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={lableStyle}>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="What would you like to tell me"
            style={myStyle}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={lableStyle}
          className="fs-8"
        >
          SEND MESSAGE
        </Button>
      </Form>
    </div>
  );
}

export default ContactUsForm;
