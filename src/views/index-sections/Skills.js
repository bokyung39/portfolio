import React from "react";

import { Container, Row, Col } from "reactstrap";

import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript, SiNestjs } from "react-icons/si";
function Skills() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <style>
        {`
          div[data-test-id="CircularProgressbarWithChildren__children"] {
            position: static !important;
          }
        `}
      </style>
      <div className="section" id="skills">
        <Container className="skills">
          <div className="title">
            <h2 style={{ fontWeight: "normal" }}>SKILLS</h2>
          </div>
          <div className="section text-center" style={{ paddingTop: 10 }}>
            <Row>
              <Col md="3">
                <div className="title">
                  <h3>BACKEND</h3>
                </div>
                <div className="info">
                  <div className="icon icon-info">
                    <CircularProgressbarWithChildren
                      value={70}
                      circleRatio={0.5}
                      strokeWidth={5}
                      styles={{
                        position: "static",
                        // Customize the root svg element
                        root: { width: "3.15em" },
                        // Customize the path, i.e. the "completed progress"
                        path: {
                          // Path color
                          stroke: "#51bcda",
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
                    <div style={{ fontSize: 12, marginTop: 20 }}>
                      <strong>70%</strong>
                    </div>
                    <FaNodeJs style={{ marginTop: -20 }} />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{ marginTop: 20 }}>
                      Node.js (Express)
                    </h4>
                    <p className="description" style={{ marginTop: 10 }}>
                      Node.js(Express)를 사용해 프로젝트를 진행해 본 경험이
                      있습니다.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="title">
                  <h3 style={{ opacity: 0 }}> .</h3>
                </div>
                <div className="info">
                  <div className="icon icon-info">
                    <CircularProgressbarWithChildren
                      value={70}
                      circleRatio={0.5}
                      strokeWidth={5}
                      styles={{
                        position: "static",
                        root: { width: "3.15em" },
                        path: {
                          stroke: "#51bcda",
                          transition: "stroke-dashoffset 0.5s ease 0s",
                          transform: "rotate(-0.25turn)",
                          transformOrigin: "center center",
                        },
                        trail: {
                          stroke: "#d6d6d6",
                          transform: "rotate(-0.25turn)",
                          transformOrigin: "center center",
                        },
                        text: {
                          fill: "#f88",
                          fontSize: "16px",
                        },
                        background: { fill: "#3e98c7" },
                      }}
                    >
                      {" "}
                    </CircularProgressbarWithChildren>
                    <div style={{ fontSize: 12, marginTop: 20 }}>
                      <strong>70%</strong>
                    </div>
                    <FaPython style={{ marginTop: -20 }} />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{ marginTop: 20 }}>
                      Python
                    </h4>
                    <p className="description" style={{ marginTop: 10 }}>
                      파이썬 기반의 AI 모델을 사용해 시스템을 구현해 본 경험이
                      있습니다.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="title">
                  <h3 style={{ marginLeft: 10 }}>FRONTEND</h3>
                </div>
                <div className="info">
                  <div className="icon icon-primary">
                    <CircularProgressbarWithChildren
                      value={70}
                      circleRatio={0.5}
                      strokeWidth={5}
                      styles={{
                        position: "static",
                        root: { width: "3.15em" },
                        path: {
                          stroke: "#51cbce",
                          transition: "stroke-dashoffset 0.5s ease 0s",
                          transform: "rotate(-0.25turn)",
                          transformOrigin: "center center",
                        },
                        trail: {
                          stroke: "#d6d6d6",
                          transform: "rotate(-0.25turn)",
                          transformOrigin: "center center",
                        },
                        text: {
                          fill: "#f88",
                          fontSize: "16px",
                        },
                        background: { fill: "#3e98c7" },
                      }}
                    >
                      {" "}
                    </CircularProgressbarWithChildren>
                    <div style={{ fontSize: 12, marginTop: 20 }}>
                      <strong>70%</strong>
                    </div>
                    <DiJavascript style={{ marginTop: -20 }} />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{ marginTop: 20 }}>
                      JavaScript
                    </h4>
                    <p className="description" style={{ marginTop: 10 }}>
                      JS의 기본 문법과 패턴에 익숙하고 나아가 서버 사이드
                      개발에서 Node.js를 활용한 백엔드 서비스를 구축할 수
                      있습니다.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="title">
                  <h3 style={{ opacity: 0 }}> .</h3>
                </div>
                <div className="info">
                  <div className="icon icon-primary">
                    <CircularProgressbarWithChildren
                      value={50}
                      circleRatio={0.5}
                      strokeWidth={5}
                      styles={{
                        position: "static",
                        root: { width: "3.15em" },
                        path: {
                          stroke: "#51cbce",
                          transition: "stroke-dashoffset 0.5s ease 0s",
                          transform: "rotate(-0.25turn)",
                          transformOrigin: "center center",
                        },

                        trail: {
                          stroke: "#d6d6d6",
                          transform: "rotate(-0.25turn)",
                          transformOrigin: "center center",
                        },

                        text: {
                          fill: "#f88",
                          fontSize: "16px",
                        },

                        background: { fill: "#3e98c7" },
                      }}
                    >
                      {" "}
                    </CircularProgressbarWithChildren>
                    <div style={{ fontSize: 12, marginTop: 20 }}>
                      <strong>50%</strong>
                    </div>
                    <FaReact style={{ marginTop: -20 }} />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{ marginTop: 20 }}>
                      React
                    </h4>
                    <p className="description" style={{ marginTop: 10 }}>
                      컴포넌트 기반 아키텍처에 대한 이해를 바탕으로 간단한
                      리액트 애플리케이션을 개발할 수 있습니다.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                {/* <div className="title">
                  <h3 style={{ opacity: 0 }}> .</h3>
                </div> */}
                <div className="info">
                  <div className="icon icon-info">
                    <CircularProgressbarWithChildren
                      value={60}
                      circleRatio={0.5}
                      strokeWidth={5}
                      styles={{
                        position: "static",
                        root: { width: "3.15em" },
                        path: {
                          stroke: "#51bcda",
                          transition: "stroke-dashoffset 0.5s ease 0s",
                          transform: "rotate(-0.25turn)",
                          transformOrigin: "center center",
                        },
                        trail: {
                          stroke: "#d6d6d6",
                          transform: "rotate(-0.25turn)",
                          transformOrigin: "center center",
                        },
                        text: {
                          fill: "#f88",
                          fontSize: "16px",
                        },
                        background: { fill: "#3e98c7" },
                      }}
                    >
                      {" "}
                    </CircularProgressbarWithChildren>
                    <div style={{ fontSize: 12, marginTop: 20 }}>
                      <strong>60%</strong>
                    </div>
                    <SiTypescript style={{ marginTop: -20 }} />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{ marginTop: 20 }}>
                      TypeScript
                    </h4>
                    <p className="description" style={{ marginTop: 10 }}>
                      인턴 과정을 통해 타입스크립트를 활용한 프로젝트를
                      진행하고, API의 성능을 높이는데에 기여한 경험이 있습니다.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                {/* <div className="title">
                  <h3 style={{ opacity: 0 }}> .</h3>
                </div> */}
                <div className="info">
                  <div className="icon icon-info">
                    <CircularProgressbarWithChildren
                      value={50}
                      circleRatio={0.5}
                      strokeWidth={5}
                      styles={{
                        position: "static",
                        root: { width: "3.15em" },
                        path: {
                          stroke: "#51bcda",
                          transition: "stroke-dashoffset 0.5s ease 0s",
                          transform: "rotate(-0.25turn)",
                          transformOrigin: "center center",
                        },
                        trail: {
                          stroke: "#d6d6d6",
                          transform: "rotate(-0.25turn)",
                          transformOrigin: "center center",
                        },
                        text: {
                          fill: "#f88",
                          fontSize: "16px",
                        },
                        background: { fill: "#3e98c7" },
                      }}
                    >
                      {" "}
                    </CircularProgressbarWithChildren>
                    <div style={{ fontSize: 12, marginTop: 20 }}>
                      <strong>50%</strong>
                    </div>
                    <SiNestjs style={{ marginTop: -20 }} />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{ marginTop: 20 }}>
                      Nest.js
                    </h4>
                    <p className="description" style={{ marginTop: 10 }}>
                      Nest.js에 대해 학습하면서, 동시에 이를 활용한
                      개인프로젝트와 팀프로젝트를 진행중에 있습니다.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Skills;
