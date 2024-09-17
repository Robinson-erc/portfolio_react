import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import pythonLogo from "../assets/img/pythonLogo.png";
import javaLogo from "../assets/img/javaLogo.png";
import javaScriptLogo from "../assets/img/java-script.png";
import RLogo from "../assets/img/r.png";
import sqlLogo from "../assets/img/sql.png";
import htmlLogo from "../assets/img/html.png";
import reactLogo from "../assets/img/react.png";
import MongoDBLogo from "../assets/img/mongoDB.png";
import gitHubLogo from "../assets/img/github.png";
import SpringLogo from "../assets/img/springBoot.png";
import wixLogo from "../assets/img/wix.png";
import wordPressLogo from "../assets/img/wordpress.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Technical Skills</h2>
                            <p>I specialize in application development, crafting efficient and scalable solutions, and web development, where I build dynamic and responsive websites. My expertise also extends to web design, focusing on creating user-friendly and visually engaging interfaces. Additionally, I apply data structures and algorithms to optimize problem-solving and enhance software performance.

                            <br></br></p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={pythonLogo} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={javaLogo} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={javaScriptLogo} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={sqlLogo} alt="Image" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={RLogo} alt="Image" />
                                    <h5>R</h5>
                                </div>
                                <div className="item">
                                    <img src={htmlLogo} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={reactLogo} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={MongoDBLogo} alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={gitHubLogo} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={SpringLogo} alt="Image" />
                                    <h5>SpringBoot</h5>
                                </div>
                                <div className="item">
                                    <img src={wordPressLogo} alt="Image" />
                                    <h5>WordPress</h5>
                                </div>
                                <div className="item">
                                    <img src={wixLogo} alt="Image" />
                                    <h5>Wix</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )
}
