import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/movieManiaWelcomePage.jpg";
import projImg2 from "../assets/img/spotifyApp.jpg";
import projImg3 from "../assets/img/expense-tracker.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Movie App",
      description: "Team Development",
      imgUrl: projImg1,
      link: "https://movi3mania.netlify.app/" // Link to the MovieMania app
    },
    {
      title: "Spotify App with Python",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "" // Provide a link if you have one
    },
    {
      title: "Expense Tracker with Python",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "" // Provide a link if you have one
    },
    {
      title: "My First Portfolio App",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://ericsportfoli0.netlify.app/" // Provide a link if you have one
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <p>My Projects showcase a range of innovative solutions across various domains. Each project highlights my expertise in creating functional and engaging applications, from web-based platforms to utility tools. Through a blend of thoughtful design and cutting-edge technology, these projects demonstrate my ability to tackle diverse challenges and deliver effective results.</p>
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
                  <Tab.Content>
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
                      <p>My Projects showcase a range of innovative solutions across various domains. Each project highlights my expertise in creating functional and engaging applications, from web-based platforms to utility tools. Through a blend of thoughtful design and cutting-edge technology, these projects demonstrate my ability to tackle diverse challenges and deliver effective results.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My Projects showcase a range of innovative solutions across various domains. Each project highlights my expertise in creating functional and engaging applications, from web-based platforms to utility tools. Through a blend of thoughtful design and cutting-edge technology, these projects demonstrate my ability to tackle diverse challenges and deliver effective results.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
