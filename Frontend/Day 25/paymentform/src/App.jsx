import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Payment Form</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>Contact Infomation</h4>
          </Accordion.Header>
          <Accordion.Body>
            <form action="">
              <Form>
                <Row>
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>
                <fieldset>
                  <legend>Gender</legend>
                  <div key={`inline-radio`} className="mb-3">
                    <Form.Check
                      inline
                      label="male"
                      name="group1"
                      type="radio"
                      id={`inline-radio-1`}
                    />
                    <Form.Check
                      inline
                      label="female"
                      name="group1"
                      type="radio"
                      id={`inline-radio-2`}
                    />
                  </div>
                </fieldset>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Address:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
              </Form>
            </form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4>Payment Information</h4>
          </Accordion.Header>
          <Accordion.Body>
            <Form>
              <p>
                Card Type:
                <select className="card_type" id="card_type" required>
                  <option value="">--Select an Option</option>
                  <option value="mastercard">Mastercard</option>
                  <option value="rupay">Rupay</option>
                  <option value="visa">Visa</option>
                </select>
              </p>
              <p>
                Card Number:{" "}
                <input
                  type="number"
                  className="card_num"
                  required
                  id="card_num"
                />
              </p>
              <p>
                Expiration Date:{" "}
                <input type="date" className="ex_date" required id="ex_date" />
              </p>
              <p>
                CVV <input type="password" className="cvv" id="cvv" required />
              </p>
              <Col xs="auto" className="my-1">
                <Form.Check
                  type="checkbox"
                  id="customControlAutosizing"
                  label="Use as Default"
                />
              </Col>
            </Form>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
