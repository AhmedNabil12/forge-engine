import PropTypes from "prop-types";
import godofwar from "./godofwar.mp4";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import whatsapp from "./whatsapp.png";
import "./home.css";
import { MoveIn, Zoom, Fade, Animator, batch, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn, FadeIn, ZoomOut, FadeOut, Move } from "react-scroll-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const Smaller = () =>
({
  in: {
    style: {
      width: (value) => `${value * 100}%`,
    },
  },
  out: {
    style: {
      width: (value) => `${(1 - value) * 100}%`,
    }
  }
});

const FontSmaller = () =>
({
  in: {
    style: {
      fontSize: (value) => `${value * 1.5}rem`,
    },
  },
  out: {
    style: {
      fontSize: (value) => `${(1 - value) * 1.5}rem`,
    }
  }
});


const VideoAnimation = batch(Smaller(), Fade(), ZoomIn(), MoveOut(0, -1000), Move(0, 100, 800, -100));
const PictureAnimation = batch(FontSmaller(), Smaller(), MoveOut(0, -1000), Move(0, 100, 800, -100), Fade(), MoveIn(1000, 0));
const Home = () => {
  return (
    <body>
      <div style={{
        backgroundColor: "#180148",
      }}>
        <ScrollContainer>
          <ScrollPage page={0} >
            <Animator animation={VideoAnimation}>
              <div className="myvideo">
                <h2 className="container_on_video" id="slogan">
                  FORGE YOUR IMAGINATION<br></br>
                </h2>
                <h1 className="container_on_video" id="quote">
                  THE LEADING<br></br>
                  PLATFORM FOR<br></br>
                  REAL-TIME 3D<br></br>
                  CREATION
                </h1>
                <div> 
                  <video src={godofwar} loop={true} autoPlay={true} muted={true} width="100%"></video>
                </div>
              </div>
            </Animator>
          </ScrollPage>


          <ScrollPage page={1}>
            <Animator animation={PictureAnimation}>
              <Container id="card1" fluid>
                <Row>
                  <Col > <img src={img1} id="img1" /></Col>
                  <Col >
                    <h1 id="word1" className="white-font">
                      Best development performance out there
                    </h1>
                    <br></br>
                    <p id="word2" className="white-font">
                      Unleash your creativity and be more productive. With Forge you can boost your game development and bring it to another level. We’ve created tools that are slim and agile. No more lagging actions, long importing, nor slow compilation. Everything you do as a developer with Forge is meant to be instant.
                    </p>
                  </Col>
                </Row>
              </Container>
            </Animator>
          </ScrollPage>

          <ScrollPage page={2}>
            <Animator animation={PictureAnimation}>
              <Container id="card1" fluid>
                <Row>
                  <Col >
                    <h1 id="word3" className="white-font">
                      Great tools made right for you
                    </h1>
                    <br></br>
                    <p id="word4" className="white-font">
                      Forge was built up with the idea of giving more power to the creators.<br></br>Visual production tools we create are making this goal possible.<br></br>Seamless lua Visual Scripting, extensible Forge Editor are just a<br></br>few examples of tools we have for you and your team.
                    </p>
                  </Col>
                  <Col xs={7}> <img src={img2} id="img2" /></Col>
                </Row>
              </Container>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>

      <div id="footer">
        <footer className="footer-distributed">

          <div className="footer-right">

            <a href="https://www.instagram.com/"><img src={instagram}  id="inst"></img></a>
            <a href="https://www.facebook.com/"><img src={facebook}  id="face"></img></a>
            <a href="https://www.whatsapp.com/"><img src={whatsapp} id="whats"></img></a>
          </div>

          <div className="footer-left">

            <p className="footer-links">
              <a className="link-1" href="#">Home</a>

              <a href="/AboutUs">About Us</a>

              <a href="#">Documentation</a>
              
            </p>

            <p>Forge Engine &copy; 2022</p>
          </div>

        </footer>
      </div>
    </body>

  );

};



export default Home;