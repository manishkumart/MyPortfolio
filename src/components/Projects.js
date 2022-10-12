import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ML from "../assets/img/ML.png";
import DL from "../assets/img/DL.png";
import CV from "../assets/img/CV.png";
import NLP from "../assets/img/NLP.png";
import BigDataBanner from "../assets/img/BigDataBanner.png";
import DataAnalytics from "../assets/img/dataanalytics.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Machine Learning",
      // description: "Design & Development",
      imgUrl: ML,
    },
    {
      title: "Deep Learning",
      // description: "Design & Development",
      imgUrl: DL,
    },
    {
      title: "Computer Vision",
      // description: "Design & Development",
      imgUrl: CV,
    },
    {
      title: "Natural Language Processing",
      // description: "Design & Development",
      imgUrl: NLP,
    },
    {
      title: "Big Data",
      // description: "Design & Development",
      imgUrl: BigDataBanner,
    },
    {
      title: "Data Anlytics",
      // description: "Design & Development",
      imgUrl: DataAnalytics,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Created with passion and executed with excellence.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Second section.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Third section.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
