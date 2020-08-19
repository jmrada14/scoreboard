import React, { useState } from "react";
import { Container, Row, Col, Jumbotron, Form, Button } from "react-bootstrap";
import FormField from "./formField";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Axios from "axios";

function App() {
  const [input, setInput] = useState({});
  const postAPI = (url) => {
    Axios.post(url, postJSON)
      .then((res) => console.log(res))
      .catch((err) => alert(err));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    postAPI("/NFLBLABLABLA");
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
        Away: input.guestValQ1 ? +input.guestValQ1 : 0,
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
      TimeRemainingInQuarter: input.timeVal ? input.timeVal : 900,
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
  return (
    <Container>
      <Jumbotron>
        <Row>
          <Col md={3} className="border border-black">
            <div
              className="h1"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              HOME
            </div>
            <FormField name="homeValQ1" onChange={handleInput} />
            <FormField name="homeValQ2" onChange={handleInput} />
            <FormField name="homeValQ3" onChange={handleInput} />
            <FormField name="homeValQ4" onChange={handleInput} />
            <FormField name="homeValQ5" onChange={handleInput} />
          </Col>
          <Col className="border border-black">
            <Row>
              <Col md="6">
                <FormField name="timeVal" onChange={handleInput} label="TIME" />
              </Col>
              <Col md="6">
                <FormField
                  name="periodVal"
                  onChange={handleInput}
                  label="CurrentQ"
                />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormField
                  name="teamPos"
                  onChange={handleInput}
                  label="Team in pos"
                />
              </Col>
              <Col md="6">
                <FormField
                  name="firstKickOff"
                  onChange={handleInput}
                  label="first kick off"
                />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {" "}
                <FormField
                  name="homeTimeRem"
                  onChange={handleInput}
                  label="Home timeout rem"
                />
              </Col>
              <Col md="6">
                <FormField
                  name="AwayTimeRem"
                  onChange={handleInput}
                  label="Away timeout rem"
                />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormField
                  name="yardsToGo"
                  onChange={handleInput}
                  label="YardsToGo"
                />
              </Col>
              <Col md="6">
                <FormField
                  name="YardsLine"
                  onChange={handleInput}
                  label="Yards Line"
                />
              </Col>
            </Row>
            <Row>
              <Row>
                <Col md="6">
                  <FormField
                    name="toGoVal"
                    onChange={handleInput}
                    label="TO GO"
                  />
                </Col>
                <Col md="6">
                  <FormField
                    name="downVal"
                    onChange={handleInput}
                    label="DOWN"
                  />
                </Col>
              </Row>
              <Col md="6">
                <FormField
                  name="supremacy"
                  onChange={handleInput}
                  label="Supremacy"
                />
              </Col>
              <Col md="6">
                <FormField
                  name="totalPts"
                  onChange={handleInput}
                  label="total pts"
                />
              </Col>
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
              <FormField name="guestValQ1" onChange={handleInput} />
              <FormField name="guestValQ2" onChange={handleInput} />
              <FormField name="guestValQ3" onChange={handleInput} />
              <FormField name="guestValQ4" onChange={handleInput} />
              <FormField name="guestValQ5" onChange={handleInput} />
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
    </Container>
  );
}

export default App;
