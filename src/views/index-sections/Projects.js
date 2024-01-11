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
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// core components
import portfolioData from "../../assets/data/portfolioData";

function Projects() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === portfolioData.portfolioList[
      selectedProjectIndex
    ].images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? portfolioData.portfolioList[
      selectedProjectIndex
    ].images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth"});
    }
  };
  const handleDetailClick = (index) => {
    setSelectedProjectIndex(index);
    setActiveIndex(0); 
    scrollToSection("detail");
  };
  return (
    <>
    <div className="section section-dark" id="projects">
        <Container>
        <div className="title">
          <h2>PROJECTS</h2>
        </div>
          <Row className="example-page">
          {portfolioData.portfolioList.map((project, index) => (
              <Col key={index} className="text-center" md="6">
                <a className="img-hover">
                  {/* Project Image */}
                  <img
                    alt={project.name}
                    className="img-rounded img-responsive"
                    src={require(`assets/img/${project.thumbnail}`)}
                    style={{ width: "100%" }}
                  />
                  <div className="hover-text">
                    {/* Project Details */}
                    <h5 style={{ fontWeight: "bold", margin: "10px 0" }}>
                      {project.name}
                    </h5>
                    <p style={{ fontWeight: "normal" }}>
                      {project.description}
                    </p>
                    <Button
                      className="btn-outline-neutral btn-round mt-2"
                      color="default"
                      size="sm"
                      onClick={() => handleDetailClick(index)}
                    >
                      자세히 보기
                    </Button>
                  </div>
                </a>
                {/* Additional Project Information */}
                <div className="text-left">
                  {project.techStack.map((tech, techIndex) => (
                    <Button
                      key={techIndex}
                      className="btn-outline-neutral btn-round ml-1 mr-1 mb-4"
                      color="default"
                      size="sm"
                    >
                      {tech}
                    </Button>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="section" id="detail">
        {selectedProjectIndex === null && setSelectedProjectIndex(0)}
        {selectedProjectIndex !== null && (
          <div className="section pt-o">
            <Container className="projects">
              
              <Row>
                <Col className="ml-auto mr-auto" md="4">
                  <Card className="page-carousel">
                    {/* 선택된 프로젝트의 이미지를 Carousel로 표시 */}
                    <Carousel
                      activeIndex={activeIndex}
                      next={next}
                      previous={previous}
                    >
                      {/* 선택된 프로젝트의 이미지 목록을 반복해서 CarouselItem으로 생성 */}
                      {portfolioData.portfolioList[
                        selectedProjectIndex
                      ].images.map((image, imageIndex) => (
                        <CarouselItem
                          onExiting={onExiting}
                          onExited={onExited}
                          key={imageIndex}
                        >
                          <img
                            src={require(`assets/img/${image}`)}
                            alt={`Project Image ${imageIndex + 1}`}
                          />
                          <CarouselCaption
                            captionText=""
                            captionHeader=""
                          />
                        </CarouselItem>
                      ))}
                      <a
                        className="left carousel-control carousel-control-prev"
                        data-slide="prev"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          previous();
                        }}
                        role="button"
                      >
                        <span className="fa fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="right carousel-control carousel-control-next"
                        data-slide="next"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          next();
                        }}
                        role="button"
                      >
                        <span className="fa fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </a>
                    </Carousel>
                  </Card>
                  <div className="text-center">
                    <Button
                      className="btn-outline-default btn-round mt-2 mr-5"
                      color="default"
                      size="lg"
                      target="_blank"
                      href={portfolioData.portfolioList[
                        selectedProjectIndex
                      ].github}
                    >
                      github
                    </Button>
                    <Button
                      className="btn-outline-default btn-round mt-2"
                      color="default"
                      size="lg"
                      target="_blank"
                      href={portfolioData.portfolioList[
                        selectedProjectIndex
                      ].deploy}
                    >
                      배포 링크
                    </Button>
                      
                  </div>
                  
                </Col>
                <Col className="ml-auto mr-auto" md="6">
                  {/* 선택된 프로젝트의 제목을 표시 */}
                  <div>
                    <h2 style={{ fontWeight: "normal"}}>
                      {portfolioData.portfolioList[
                        selectedProjectIndex
                      ].name}&nbsp;&nbsp;
                      <small>
                        {portfolioData.portfolioList[
                          selectedProjectIndex
                        ].project}
                      </small><br/>
                      <small>
                        {portfolioData.portfolioList[
                          selectedProjectIndex
                        ].period}
                      </small>
                    </h2>
                    <h5><br />
                      {portfolioData.portfolioList[
                        selectedProjectIndex
                      ].descriptionDetail.split('\n').map((
                        line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h5>

                  </div>

                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>{" "}
    </>
  );
}

export default Projects;
