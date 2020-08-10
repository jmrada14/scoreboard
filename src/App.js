import React, { useState } from "react";
import { Container, Row, Col, Jumbotron, Form, Button } from "react-bootstrap";
import API from "./API";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css"

function App() {
  const [response, setResponse] = useState({});
  const [input, setInput] = useState({});
  const postAPI = (query) => {
    API.post(query)
      .then((res) => setResponse({ response: res.data }))
      .catch((err) => console.log(err));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    postAPI(input);
  };
  const handleInput = (event) => {
    const { target } = event;
    const value = target?.value;
    const name = target?.name
    setInput({...input,[name]: value});
  };
  console.log(input);
  return (
    <Container>
      <Jumbotron style={{marginTop: "20%"}}>
        <Row>
          <Col md={3} className="border border-black">
            <div
              className="h1"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              HOME
            </div>
            <div>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="homeVal"
                    size="lg"
                    type="text"
                    placeholder="Large text"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col md={6} className="border border-black">
            <Row>
              <div
                className="h1 border border-black "
                style={{ margin: "0 auto" }}
              >
                TIME
              </div>
              <div>
                <Form>
                  <Form.Group>
                    <Form.Control
                      name="timeVal"
                      size="lg"
                      type="text"
                      placeholder="Large text"
                      onChange={handleInput}
                    />
                  </Form.Group>
                </Form>
              </div>
            </Row>
            <Row>
              <div
                className="h1 border border-black "
                style={{ margin: "0 auto" }}
              >
                PERIOD
              </div>
              <div>
                <Form>
                  <Form.Group>
                    <Form.Control
                      name="periodVal"
                      size="lg"
                      type="text"
                      placeholder="Large text"
                      onChange={handleInput}
                    />
                  </Form.Group>
                </Form>
              </div>
            </Row>
          </Col>
          <Col md={3} className="border border-black">
            <div
              className="h1"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              GUEST
            </div>
            <div>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="guestVal"
                    size="lg"
                    type="text"
                    placeholder="Large text"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>

        <Row style={{marginTop: "5%"}}>
          <Col md={2} className="border border-black">
            <div>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="toGoVal"
                    size="lg"
                    type="text"
                    placeholder="Large text"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col md={2} className="border border-black">
            <div
              className="h1"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              TO GO
            </div>
          </Col>
          <Col md={4} className="border border-black">
            <div
              className="h1"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              SCOREBOARD
            </div>
          </Col>
          <Col md={2} className="border border-black">
            <div
              className="h1"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              DOWN
            </div>
          </Col>
          <Col md={2} className="border border-black">
            <div>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="downVal"
                    size="lg"
                    type="text"
                    placeholder="Large text"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
        <Button style={{ textAlign: "center", margin: "0 auto" }} size="lg" onClick={handleSubmit}>
          POST
        </Button>
      </Jumbotron>
    </Container>
  );
}

export default App;
