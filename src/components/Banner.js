Banner.js
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Software Developer", "Web Developer", "IT Professional"];
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  
  const isMobile = window.innerWidth <= 768; // Adjust the width threshold as needed

  useEffect(() => {
    if (isMobile) {
      setText(''); // Reset text for mobile
      return; // Skip typewriter effect
    }

    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      } else {
        setDelta(isDeleting ? prevDelta => prevDelta / 2 : 300 - Math.random() * 100);
      }
    };

    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text, loopNum, isDeleting, delta, isMobile]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Eric`} {isMobile ? '' : <span className="txt-rotate"><span className="wrap">{text}</span></span>}</h1>
                  <p>
                    I am a recent graduate from Rowan University, where I majored in Computing and Informatics and minored in Computer Science. My passion for coding and IT drives me to create innovative solutions to real-world problems. I enjoy tackling challenges that require both technical expertise and creativity, and I am always eager to expand my knowledge and skills in the ever-evolving field of technology.
                  </p>
                  <button onClick={() => console.log('connect')}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <img src={headerImg} alt="Header visual representation of Eric's portfolio" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};