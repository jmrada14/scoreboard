import React, { useState } from "react";
import { Container, Row, Col, Jumbotron, Form, Button } from "react-bootstrap";
import FormField from "./formField";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Axios from "axios";
import Tree from "react-json-tree";


let url;

function App() {
  const [input, setInput] = useState({});
  const [response, setResponse] = useState({})

  const env = input.API || "ci"
  if (env === "localhost") {
    url = "http://localhost:8080/AmericanFootballModel/s"
  } else {
    url = "http://americanfootball-ncaa.sports-models-" + env + ".i.geniussports.com/AmericanFootballModel/s"
  }

  const postAPI = () => {

    Axios.post(url, postJSON)
      .then((res) => setResponse(res))
      .catch((err) => alert(err, err.data, err.headers));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    postAPI({url});
  };

  const postJSON = {
    FixtureData: {
      MaxOvertimes: 0,
      OvertimeLength: 0.08008281904610115,
      SubCode: "NCAA",
      Code: "American",
    },
    MatchState: {
      TeamInPossession: input.teamPos ? input.teamPos : "Home",
      Down: input.downVal ? +input.downVal : 1,
      CurrentQuarter: input.periodVal ? +input.periodVal : 1,
      AwayTimeoutsRemaining: input.AwayTimeRem ? +input.AwayTimeRem : 3,
      PlaySubType: "Standard",
      Q1Score: {
        Away: input.guestValQ1 ? +input.guestValQ1 : 0,
        Home: input.homeValQ1 ? +input.homeValQ1 : 0,
      },
      Q2Score: {
        Away: input.guestValQ2 ? +input.guestValQ2 : 0,
        Home: input.homeValQ2 ? +input.homeValQ2 : 0,
      },
      Q3Score: {
        Away: input.guestValQ3 ? +input.guestValQ3 : 0,
        Home: input.homeValQ3 ? +input.homeValQ3 : 0,
      },
      Q4Score: {
        Away: input.guestValQ4 ? +input.guestValQ4 : 0,
        Home: input.homeValQ4 ? +input.homeValQ4 : 0,
      },
      OTScore: {
        Away: input.guestValQ5 ? +input.guestValQ5 : 0,
        Home: input.homeValQ5 ? +input.homeValQ5 : 0,
      },
      IsClockRunning: true,
      HomeTimeoutsRemaining: input.homeTimeRem ? +input.homeTimeRem : 3,
      TeamFirstKickoff: input.firstKickOff ? input.firstKickOff : "Away",
      PlayType: input.playtype ? input.playtype : 'Standard',
      YardsToGo: input.yardsToGo ? +input.yardsToGo : 10,
      YardLine: input.YardsLine ? +input.YardsLine : 75,
      TimeRemainingInQuarter: input.timeVal ? +input.timeVal : 900,
    },
    TradingParameters: {
      Supremacy: input.supremacy ? +input.supremacy : 10,
      TotalPoints: input.totalPts ? +input.totalPts : 60,
    },
  };

  const handleInput = (event) => {
    const { target } = event;
    const value = target?.value;
    const name = target?.name;
    setInput({ ...input, [name]: value });
  };

  return (
    <Container>
      <Jumbotron>
        <div>API in {url}</div>
        <Row>
          <Col md={3} className="border border-black">
            <div
              className="h1"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              HOME
            </div>
            <FormField
              name="homeValQ1"
              onChange={handleInput}
              pattern="/^\d+$/"
              type="number"
              value={input.homeValQ1 ? input.homeValQ1 : 0 }
            />
            <FormField
              name="homeValQ2"
              onChange={handleInput}
              pattern="/^\d+$/"
              type="number"
              value={input.homeValQ2 ? input.homeValQ2 : 0 }
            />
            <FormField
              name="homeValQ3"
              onChange={handleInput}
              pattern="/^\d+$/"
              type="number"
              value={input.homeValQ3 ? input.homeValQ3 : 0 }
            />
            <FormField
              name="homeValQ4"
              onChange={handleInput}
              pattern="/^\d+$/"
              type="number"
              value={input.homeValQ4 ? input.homeValQ4 : 0 }
            />
            <FormField
              name="homeValQ5"
              onChange={handleInput}
              pattern="/^\d+$/"
              type="number"
              value={input.homeValQ5 ? input.homeValQ5 : 0 }
            />
          </Col>
          <Col className="border border-black">
            <Row>
              <Col md="6">
                <FormField name="timeVal" onChange={handleInput} label="TimeRemainQuarter [s]" value={input.timeVal ? input.timeVal : 900 }/>
              </Col>
              <Col md="6">
                <FormField
                  name="periodVal"
                  onChange={handleInput}
                  label="CurrentQuarter"
                  type="number"
                  value={input.periodVal ? input.periodVal : 1 }
                />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {/* <FormField
                  name="teamPos"
                  onChange={handleInput}
                  label="Team in pos"
                /> */}
                <Form>
                  <Form.Label>TeamInPossession</Form.Label>
                  <Form.Control
                    name="teamPos"
                    as="select"
                    custom
                    onChange={handleInput}
                    value={input.teamPos ? input.teamPos : "Home" }
                  >
                    <option>Home</option>
                    <option>Away</option>
                    <option>Neutral</option>
                  </Form.Control>
                </Form>
              </Col>
              <Col md="6">
                {/* <FormField
                  name="firstKickOff"
                  onChange={handleInput}
                  label="first kick off"
                /> */}
                <Form>
                  <Form.Label>TeamFirstKickoff</Form.Label>
                  <Form.Control
                    name="firstKickOff"
                    as="select"
                    custom
                    onChange={handleInput}
                    value={input.firstKickOff ? input.firstKickOff : "Away" }
                  >
                    <option>Home</option>
                    <option>Away</option>
                    <option>Neutral</option>
                  </Form.Control>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {" "}
                <FormField
                  name="homeTimeRem"
                  onChange={handleInput}
                  label="HomeTimeoutRemain"
                  type="number"
                  value={input.homeTimeRem ? input.homeTimeRem : 3 }
                />
              </Col>
              <Col md="6">
                <FormField
                  name="AwayTimeRem"
                  onChange={handleInput}
                  label="AwayTimeoutRemain"
                  type="number"
                  value={input.AwayTimeRem ? input.AwayTimeRem : 3 }
                />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormField
                  name="yardsToGo"
                  onChange={handleInput}
                  label="YardsToGo (to 1st Down)"
                  type="number"
                  value={input.yardsToGo ? input.yardsToGo : 10 }
                />
              </Col>
              <Col md="6">
                <FormField
                  name="YardsLine"
                  onChange={handleInput}
                  label="YardLine (to Endzone)"
                  type="number"
                  value={input.YardsLine ? input.YardsLine : 75 }
                />
              </Col>
            </Row>
            <Row>
              <Row>
                <Col md="6"></Col>
                <Col md="6">
                  <FormField
                    name="downVal"
                    onChange={handleInput}
                    label="DOWN"
                    value={input.downVal ? input.downVal : 1 }
                  />
                </Col>
              </Row>
              <Row>
              <Col md="6">
                <FormField
                  name="totalPts"
                  onChange={handleInput}
                  label="TotalPoints"
                  type="number"
                  value={input.totalPts ? input.totalPts : 60 }
                />
              </Col>
              <Col md="6">
                <FormField
                  name="supremacy"
                  onChange={handleInput}
                  label="Supremacy"
                  type="number"
                  value={input.supremacy ? input.supremacy: 10 }
                />
              </Col>
              </Row>
              <Row>
                <Col>
                  <Form>
                    <Form.Label>API Environment</Form.Label>
                    <Form.Control
                        name="API"
                        as="select"
                        custom
                        onChange={handleInput}
                        value={input.api}
                    >
                      <option>ci</option>
                      <option>localhost</option>
                      <option>uat</option>
                      <option>production</option>
                    </Form.Control>
                  </Form>
                </Col>
                <Col>
                  <Form>
                    <Form.Label>PlayType</Form.Label>
                    <Form.Control
                        name="playtype"
                        as="select"
                        custom
                        onChange={handleInput}
                        value={input.playtype ? input.playtype : "Standard" }
                    >
                      <option>Standard</option>
                      <option>Conversion</option>
                      <option>Kickoff</option>
                    </Form.Control>
                  </Form>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col md={3} className="border border-black">
            <div
              className="h1"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              AWAY
            </div>
            <div>
              <FormField
                name="guestValQ1"
                onChange={handleInput}
                pattern="/^\d+$/"
                type="number"
                value={input.guestValQ1 ? input.guestValQ1 : 0 }
              />
              <FormField
                name="guestValQ2"
                onChange={handleInput}
                pattern="/^\d+$/"
                type="number"
                value={input.guestValQ2 ? input.guestValQ2 : 0 }
              />
              <FormField
                name="guestValQ3"
                onChange={handleInput}
                pattern="/^\d+$/"
                type="number"
                value={input.guestValQ3 ? input.guestValQ3 : 0 }
              />
              <FormField
                name="guestValQ4"
                onChange={handleInput}
                pattern="/^\d+$/"
                type="number"
                value={input.guestValQ4 ? input.guestValQ4 : 0 }
              />
              <FormField
                name="guestValQ5"
                onChange={handleInput}
                pattern="/^\d+$/"
                type="number"
                value={input.guestValQ5 ? input.guestValQ5 : 0 }
              />
            </div>
          </Col>
          <Button
            style={{ textAlign: "center", margin: "0 auto" }}
            size="lg"
            onClick={handleSubmit}
          >
            POST
          </Button>
        </Row>
      </Jumbotron>

      <div>
        <Tree data={response?.data} />
      </div>
    </Container>
  );
}

export default App;
