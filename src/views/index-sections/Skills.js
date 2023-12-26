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
  Progress,
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

// core components

function Skills() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <div className="section" id="skills">
        <Container className="skills">
        <div className="title">
          <h2>SKILLS</h2>
        </div>
          <Row>
            <Col md="6">
              <div className="title">
                <h3>BACKEND</h3>
              </div>
              <div id="node-info">
                <h6>Node.js (Express)</h6>
                <Progress
                  max="100"
                  value="70"
                  barClassName="progress-bar-info"
                />
                <UncontrolledPopover
                  placement="top"
                  target="node-info"
                  trigger="hover"
                >
                  <PopoverBody>
                  Node.js(Express)를 사용해 프로젝트를 진행해 본 경험이 있습니다.
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
                    파이썬 기반의 AI 모델을 사용해 시스템을 구현해 본 경험이 있습니다.
                  </PopoverBody>
                </UncontrolledPopover>
              </div>
              
              <br />
            </Col>
            <Col md="6">
            <div className="title">
                <h3>FRONTEND</h3>
              </div>
              <div id="javascript-info">
                <h6>JavaScript</h6>
                <Progress
                  max="100"
                  value="60"
                  barClassName="progress-bar-success"
                />
                <UncontrolledPopover
                  placement="top"
                  target="javascript-info"
                  trigger="hover"
                >
                  <PopoverBody>
                    
                  </PopoverBody>
                </UncontrolledPopover>
              </div>
              
              <br />
              <h6>React</h6>
              <Progress
                max="100"
                value="30"
                barClassName="progress-bar-success"
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col md="6">
            <div className="title">
                <h3>TOOLS</h3>
              </div>
              <h6>Git</h6>
              <Progress
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
              <h6>MongoDB</h6>
              <Progress
                max="100"
                value="70"
                barClassName="progress-bar-warning"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Skills;
