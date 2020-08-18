import React, { useState } from "react";
import { Container, Row, Col, Jumbotron, Form, Button } from "react-bootstrap";
import API from "./API";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

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
  const postJSON = {
    FixtureData: {
      MaxOvertimes: 0,
      OvertimeLength: 0.08008281904610115,
      SubCode: "NFL",
      Code: "American",
    },
    MatchState: {
      TeamInPossession: input.teamPos ? input.teamPos : "home",
      Down: input.downVal ? input.downVal : 0,
      CurrentQuarter: input.periodVal ? input.periodVal : 1,
      AwayTimeoutsRemaining: input.AwayTimeRem ? input.AwayTimeRem : 3,
      PlaySubType: "PAT",
      Q1Score: {
        Away: input.guestValQ1 ? input.guestValQ1 : 0,
        Home: input.homeValQ1 ? input.homeValQ1 : 0,
      },
      Q2Score: {
        Away: input.guestValQ2 ? input.guestValQ2 : 0,
        Home: input.homeValQ2 ? input.homeValQ2 : 0,
      },
      Q3Score: {
        Away: input.guestValQ3 ? input.guestValQ3 : 0,
        Home: input.homeValQ3 ? input.homeValQ3 : 0,
      },
      Q4Score: {
        Away: input.guestValQ4 ? input.guestValQ4 : 0,
        Home: input.homeValQ4 ? input.homeValQ4 : 0,
      },
      OTScore: {
        Away: input.guestValQ5 ? input.guestValQ5 : 0,
        Home: input.homeValQ5 ? input.homeValQ5 : 0,
      },
      IsClockRunning: true,
      HomeTimeoutsRemaining: input.homeTimeRem ? input.homeTimeRem : 3,
      TeamFirstKickoff: input.firstKickOff ? input.firstKickOff : "home",
      PlayType: "Standard",
      YardsToGo: input.yardsToGo ? input.yardsToGo : 0,
      YardLine: input.YardsLine ? input.YardsLine : 1,
      TimeRemainingInQuarter: input.timeVal ? input.timeVal : 900 ,
    },
    TradingParameters: {
      Supremacy: input.supremacy ? input.supremacy : 5,
      TotalPoints: input.totalPts ? input.totalPts : 15,
    },
  };
  console.log(postJSON);
  const handleInput = (event) => {
    const { target } = event;
    const value = target?.value;
    const name = target?.name;
    setInput({ ...input, [name]: value });
  };
  console.log(input);
  return (
    <Container>
      <Jumbotron>
        <Row>
          <Col md={3} className="border border-black">
            <div
              className="h5"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              HOME
            </div>
            <div>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="homeValQ1"
                    size="sm"
                    type="number"
                    placeholder="0"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="homeValQ2"
                    size="sm"
                    type="number"
                    placeholder="0"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="homeValQ3"
                    size="sm"
                    type="number"
                    placeholder="0"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="homeValQ4"
                    size="sm"
                    type="number"
                    placeholder="0"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="homeValQ5"
                    size="sm"
                    type="number"
                    placeholder="0"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col md={6} className="border border-black">
            <Row>
              <div
                className="h5-50 border border-black "
                style={{ margin: "0 auto" }}
              >
                TIME
              </div>
              <div>
                <Form>
                  <Form.Group>
                    <Form.Control
                      name="timeVal"
                      size="sm"
                      type="number"
                      placeholder="0"
                      onChange={handleInput}
                    />
                  </Form.Group>
                </Form>
              </div>
            </Row>
            <Row>
              <div
                className="h-50 border border-black "
                style={{ margin: "0 auto" }}
              >
                Current quarter
              </div>
              <div>
                <Form>
                  <Form.Group>
                    <Form.Control
                      name="periodVal"
                      size="sm"
                      type="number"
                      placeholder="1"
                      onChange={handleInput}
                    />
                  </Form.Group>
                </Form>
              </div>
            </Row>
            <Row>
              <div className="h-75">
                Team in pos
              <Form>
                  <Form.Group>
                    <Form.Control
                      name="teamPos"
                      size="sm"
                      type="text"
                      placeholder="Home"
                      onChange={handleInput}
                    />
                  </Form.Group>
                </Form>
                <Row>
                  <div
                    className="h-75"
                    style={{ margin: "0 auto" }}
                  >
                    Home timeout rem
                  </div>
                  <div>
                    <Form>
                      <Form.Group>
                        <Form.Control
                          name="homeTimeRem"
                          size="sm"
                          type="number"
                          placeholder="3"
                          onChange={handleInput}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </Row>
                <Row>
                  <div
                    className="h-75 border border-black "
                    style={{ margin: "0 auto" }}
                  >
                    Away timeout rem
                  </div>
                  <div>
                    <Form>
                      <Form.Group>
                        <Form.Control
                          name="AwayTimeRem"
                          size="sm"
                          type="number"
                          placeholder="3"
                          onChange={handleInput}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <div
                        className="h-75 border border-black "
                        style={{ margin: "0 auto" }}
                      >
                        Yards to go
                      </div>
                      <Form>
                        <Form.Group>
                          <Form.Control
                            name="yardsToGo"
                            size="sm"
                            type="number"
                            placeholder="100"
                            onChange={handleInput}
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div>
                      <div
                        className="h-75 border border-black "
                        style={{ margin: "0 auto" }}
                      >
                        Yards Line
                      </div>
                      <Form>
                        <Form.Group>
                          <Form.Control
                            name="YardsLine"
                            size="sm"
                            type="number"
                            placeholder="1"
                            onChange={handleInput}
                          />
                        </Form.Group>
                      </Form>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <div
                        className="h-75 border border-black "
                        style={{ margin: "0 auto" }}
                      >
                        Supremacy
                      </div>
                      <Form>
                        <Form.Group>
                          <Form.Control
                            name="supremacy"
                            size="sm"
                            type="number"
                            placeholder="10"
                            onChange={handleInput}
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div>
                      <div
                        className="h-75 border border-black"
                        style={{ margin: "0 auto" }}
                      >
                        total pts
                      </div>
                      <Form>
                        <Form.Group>
                          <Form.Control
                            name="totalPts"
                            size="sm"
                            type="number"
                            placeholder="40"
                            home
                            onChange={handleInput}
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div>
                      <div
                        className="h-50 border border-black "
                        style={{ margin: "0 auto" }}
                      >
                        first kick off
                      </div>
                      <Form>
                        <Form.Group>
                          <Form.Control
                            name="firstKickOff"
                            size="sm"
                            type="text"
                            placeholder="Home"
                            home
                            onChange={handleInput}
                          />
                        </Form.Group>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
          <Col md={3} className="border border-black">
            <div
              className="h5"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              AWAY
            </div>
            <div>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="guestValQ1"
                    size="sm"
                    type="number"
                    placeholder="0"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="guestValQ2"
                    size="sm"
                    type="number"
                    placeholder="0"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="guestValQ3"
                    size="sm"
                    type="number"
                    placeholder="0"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="guestValQ4"
                    size="sm"
                    type="number"
                    placeholder="0"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="guestValQ5"
                    size="sm"
                    type="number"
                    placeholder="0"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: "5%" }}>
          <Col md={2} className="border border-black">
            <div>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="toGoVal"
                    size="sm"
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
        <Button
          style={{ textAlign: "center", margin: "0 auto" }}
          size="lg"
          onClick={handleSubmit}
        >
          POST
        </Button>
      </Jumbotron>
    </Container>
  );
}

export default App;
