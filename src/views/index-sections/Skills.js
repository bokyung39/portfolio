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
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function Skills() {
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [37.5],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 },
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  });
  return (
    <>
      <div className="section section-buttons" id="skills">
        <Container>
          <div className="title">
            <h2>SKILLS</h2>
          </div>
          <div id="profile">
            <div className="title">
              <h3>문제에서 기회를 포착하고,
                  해결을 통한 성취감을 좋아합니다.<br/>
                  일상에서 마주한 불편함으로,
                  더 나은 사용자 경험에 대해 고민합니다.
              </h3>
            </div>
            <Row>
              <Col md="8">
                <Button
                  className="mr-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Default
                </Button>
                <Button
                  className="btn-link mr-1"
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Primary
                </Button>
                <Button
                  className="btn-link mr-1"
                  color="success"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Success
                </Button>
                <Button
                  className="btn-link mr-1"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Info
                </Button>
                <Button
                  className="btn-link mr-1"
                  color="warning"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Warning
                </Button>
                <Button
                  className="btn-link mr-1"
                  color="danger"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Danger
                </Button>
                <Button
                  className="btn-link"
                  color="neutral"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Neutral
                </Button>
              </Col>
            </Row>
          </div>
          
        </Container>
      </div>
    </>
  );
}

export default Skills;
