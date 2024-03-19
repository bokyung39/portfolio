import React from "react";
import { FaUser, FaPhone, FaEnvelope, FaBirthdayCake } from "react-icons/fa";

import { Container, Row, Col } from "reactstrap";

function AboutMe() {
  return (
    <>
      <div className="section" id="about-me">
        <Container>
          <div className="title">
            <h2 style={{ fontWeight: "normal" }}>ABOUT ME</h2>
          </div>
          <div id="profile">
            <div className="title" style={{ color: "#66615b" }}>
              <h3>
                안녕하세요. 백엔드 개발자를 꿈꾸는 김보경입니다.
                <br />
                <br />
                문제에서 기회를 포착하고, 해결을 통한 성취감을 좋아하며,
                끊임없이 발전하고자 합니다.
                <br />
                협업과 효율성을 중요시하며, 사용자들에게 편리한 경험을
                제공하고자 노력합니다.
                <br />
                <br />
                <br />
              </h3>
            </div>

            <Row>
              <Col className="mr-auto ml-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/6.jpg")}
                />
              </Col>
              <Col md="9">
                <div className="profile-info" style={{ marginLeft: "50px" }}>
                  {/* 프로필 정보 */}
                  <h4>
                    <FaUser style={{ marginRight: "10px" }} /> NAME &nbsp; |
                    &nbsp; 김보경
                  </h4>
                  <h4>
                    <FaBirthdayCake style={{ marginRight: "10px" }} /> 생년월일
                    &nbsp; | &nbsp; 2000.03.09
                  </h4>
                  <h4>
                    <FaPhone style={{ marginRight: "10px" }} /> 전화번호 &nbsp;
                    | &nbsp; 010-9068-8430
                  </h4>
                  <h4>
                    <FaEnvelope style={{ marginRight: "10px" }} /> 이메일 &nbsp;
                    | &nbsp; bkykim12@gmail.com
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
