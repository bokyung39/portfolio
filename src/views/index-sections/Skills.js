/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  //Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FaNodeJs } from "react-icons/fa";

function Skills() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const percentage = 66;

  return (
    <>
      <div className="section" id="skills">
        <Container className="skills">
          <div className="title">
            <h2 style={{ fontWeight: "normal" }}>SKILLS</h2>
          </div>
          <Row>
            <Col md="6">
              <div className="title">
                <h3>BACKEND</h3>
              </div>
              <div id="node-info">
                <h6>Node.js (Express)</h6>
                <div style={{ width: 200, height: 200 }}>
                  <CircularProgressbarWithChildren
                    value={66}
                    circleRatio={0.5}
                    strokeWidth={5}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: -0.25,
                      pathColor: `rgba(62, 152, 199, ${percentage / 100})`,

                      trailColor: "#d6d6d6",
                    })}
                  >
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    <img
                      style={{ width: 40, marginTop: -5 }}
                      src="https://i.imgur.com/b9NyUGm.png"
                      alt="doge"
                    />
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                      <strong>66%</strong> mate
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
                <div className="description">
                  <h4 className="info-title">Node.js (Express)</h4>
                  <p className="description">
                    Spend your time generating new ideas. You don't have to
                    think of implementing.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
                {/* <Progress
                  max="100"
                  value="70"
                  barClassName="progress-bar-info"
                  style={{
                    height: "20px",
                  }}
                >
                  70%
                </Progress>
                <UncontrolledPopover
                  placement="top"
                  target="node-info"
                  trigger="hover"
                >
                  <PopoverBody>
                    Node.js(Express)를 사용해 프로젝트를 진행해 본 경험이
                    있습니다.
                  </PopoverBody>
                </UncontrolledPopover>
              </div>
              <br />
              <div id="python-info">
                <h6>Python</h6>
                <Progress
                  max="100"
                  value="70"
                  barClassName="progress-bar-info"
                />
                <UncontrolledPopover
                  placement="top"
                  target="python-info"
                  trigger="hover"
                >
                  <PopoverBody>
                    파이썬 기반의 AI 모델을 사용해 시스템을 구현해 본 경험이
                    있습니다.
                  </PopoverBody>
                </UncontrolledPopover> */}
              </div>

              <br />
            </Col>
            <Col md="6">
              <div className="title">
                <h3>FRONTEND</h3>
              </div>
              <div id="javascript-info">
                <h6>JavaScript</h6>
                {/* <Progress
                  max="100"
                  value="60"
                  barClassName="progress-bar-success"
                />
                <UncontrolledPopover
                  placement="top"
                  target="javascript-info"
                  trigger="hover"
                >
                  <PopoverBody></PopoverBody>
                </UncontrolledPopover> */}
              </div>
              <br />
              <h6>React</h6>
              {/* <Progress
                max="100"
                value="30"
                barClassName="progress-bar-success"
              /> */}
            </Col>
          </Row>
          <br />
          <br />
          <div className="section text-center">
            <Row>
              <Col md="3">
                <div className="info icon icon-info">
                  <CircularProgressbarWithChildren
                    value={70}
                    circleRatio={0.5}
                    strokeWidth={5}
                    styles={{
                      // Customize the root svg element
                      root: {},
                      // Customize the path, i.e. the "completed progress"
                      path: {
                        // Path color

                        stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        // Customize transition animation
                        transition: "stroke-dashoffset 0.5s ease 0s",
                        // Rotate the path
                        transform: "rotate(-0.25turn)",
                        transformOrigin: "center center",
                      },
                      // Customize the circle behind the path, i.e. the "total progress"
                      trail: {
                        // Trail color

                        stroke: "#d6d6d6",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        // Rotate the trail
                        transform: "rotate(-0.25turn)",
                        transformOrigin: "center center",
                      },
                      // Customize the text
                      text: {
                        // Text color
                        fill: "#f88",
                        // Text size
                        fontSize: "16px",
                      },
                      // Customize background - only used when the `background` prop is true
                      background: {
                        fill: "#3e98c7",
                      },
                    }}
                  >
                    {" "}
                  </CircularProgressbarWithChildren>
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>70%</strong>
                  </div>
                  <div className="icon icon-info">
                    <FaNodeJs style={{ marginTop: -20 }} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Node.js (Express)</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <Row>
            <Col md="6">
              <div className="title">
                <h3>TOOLS</h3>
              </div>
              <h6>Github</h6>
              {/* <Progress
                max="100"
                value="70"
                barClassName="progress-bar-warning"
              />
              <br />
              <h6>Postman</h6>
              <Progress
                max="100"
                value="40"
                barClassName="progress-bar-warning"
              />
              <br />
              <div id="mongoDB-info">
                <h6>MongoDB</h6>
                <Progress
                  max="100"
                  value="70"
                  barClassName="progress-bar-warning"
                />
                <UncontrolledPopover
                  placement="top"
                  target="mongoDB-info"
                  trigger="hover"
                >
                  <PopoverBody>
                    MongoDB를 사용해 데이터베이스를 관리해 본 경험이 있습니다.
                  </PopoverBody>
                </UncontrolledPopover>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Skills;
