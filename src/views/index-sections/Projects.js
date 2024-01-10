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
const items = [
  {
    src: require("assets/img/soroush-karimi.jpg"),
    altText: "Somewhere",
    caption: "Somewhere",
  },
  {
    src: require("assets/img/federico-beccari.jpg"),
    altText: "Somewhere else",
    caption: "Somewhere else",
  },
  {
    src: require("assets/img/joshua-stannard.jpg"),
    altText: "Here it is",
    caption: "Here it is",
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
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
                    src={require(`assets/img/${project.images[0]}`)}
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
                      onClick={() => scrollToSection("detail")}
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
      <div id="detail">
        <div className="section pt-o" id="carousel projects">
          <Container className="projects">
          <div className="title">
            <h2>detail</h2>
          </div>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <Card className="page-carousel">
                  <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                  >
                    <CarouselIndicators
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={goToIndex}
                    />
                    {items.map((item) => {
                      return (
                        <CarouselItem
                          onExiting={onExiting}
                          onExited={onExited}
                          key={item.src}
                        >
                          <img src={item.src} alt={item.altText} />
                          <CarouselCaption
                            captionText={item.caption}
                            captionHeader=""
                          />
                        </CarouselItem>
                      );
                    })}
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
              </Col>
            </Row>
          </Container>
        </div>
      </div>{" "}
    </>
  );
}

export default Projects;
