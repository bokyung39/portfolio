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
import { FaUser, FaPhone, FaEnvelope, FaBirthdayCake } from "react-icons/fa";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function AboutMe() {
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
      <div className="section section-buttons" id="about-me">
        <Container>
          <div className="title">
            <h2>ABOUT ME</h2>
          </div>
          <div id="profile">
          <div className="title">
              <h3>
                  안녕하세요. 백엔드 개발자를 꿈꾸는 김보경입니다.<br/><br/>
                  문제에서 기회를 포착하고,
                  해결을 통한 성취감을 좋아합니다.<br/>
                  일상에서 마주한 불편함으로,
                  더 나은 사용자 경험에 대해 고민합니다.
                  <br/>
                  <br/>
                  <br/>
              </h3>
            </div>
            
            <Row>
            <Col className="mr-auto ml-auto" md="3" sm="3">
                
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/profile_cat.jpg")}
                />
              </Col>
              <Col md="9">
                <div className="profile-info" style={{ marginLeft: '50px' }}>
                  {/* 프로필 정보 */}
                  <h4>
                  <FaUser style={{ marginRight: '10px' }}/> NAME &nbsp; | &nbsp; 김보경
                  </h4>
                  <h4>
                  <FaBirthdayCake style={{ marginRight: '10px' }}/> 생년월일 &nbsp; | &nbsp; 2000.03.09
                  </h4>
                  <h4>
                  <FaPhone style={{ marginRight: '10px' }}/> 전화번호 &nbsp; | &nbsp; 010-9068-8430
                  </h4>
                  <h4>
                  <FaEnvelope style={{ marginRight: '10px' }}/> 이메일 &nbsp; | &nbsp; bkykim12@gmail.com
                  </h4>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AboutMe;
